import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";
import { toast } from "react-toastify";

// Custom fetch function with file upload support and toast-based error handling
const fetchGraphQL: FetchFunction = async (params, variables) => {
  const operations = {
    query: params.text,
    variables: structuredClone(variables),
  };

  const formData = new FormData();
  const fileMap: Record<number, string[]> = {};
  let fileIndex = 0;

  function extractFiles(obj: any, path = "variables") {
    for (const key in obj) {
      const value = obj[key];
      const fullPath = `${path}.${key}`;

      if (value instanceof File) {
        fileMap[fileIndex] = [fullPath];
        formData.append(String(fileIndex), value);
        obj[key] = null;
        fileIndex++;
      } else if (value && typeof value === "object") {
        extractFiles(value, fullPath);
      }
    }
  }

  extractFiles(operations.variables);

  try {
    const response = await fetch("http://localhost:7290/graphql", {
      method: "POST",
      ...(fileIndex > 0
        ? {
            body: (() => {
              formData.append("operations", JSON.stringify(operations));
              formData.append("map", JSON.stringify(fileMap));
              return formData;
            })(),
            headers: {
              "GraphQL-Preflight": "1",
            },
          }
        : {
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(operations),
          }),
      credentials: "include",
    });

    const json = await response.json();

    if (json.errors) {
      console.error("[GraphQL Errors]", json.errors);

      // Show toast for first error (or generic fallback)
      toast.error(json.errors[0]?.message || "A server error occurred.");
    }

    return json;
  } catch (networkError: any) {
    console.error("[Network Error]", networkError);
    toast.error("Network error: Please check your connection.");
    throw networkError;
  }
};

export const RelayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
