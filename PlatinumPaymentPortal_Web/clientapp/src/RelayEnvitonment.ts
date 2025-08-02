import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

// Custom fetch function with file upload support
const fetchGraphQL: FetchFunction = async (params, variables) => {
  const operations = {
    query: params.text,
    variables: structuredClone(variables), // Avoid mutating the original
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
        obj[key] = null; // Leave placeholder
        fileIndex++;
      } else if (value && typeof value === "object") {
        extractFiles(value, fullPath);
      }
    }
  }

  extractFiles(operations.variables);

  if (fileIndex > 0) {
    formData.append("operations", JSON.stringify(operations));
    formData.append("map", JSON.stringify(fileMap));

    const response = await fetch("http://localhost:7290/graphql/graphql", {
      method: "POST",
      body: formData,
      headers: {
        "GraphQL-Preflight": "1",
      },
      credentials: "include",
    });

    return await response.json();
  } else {
    const response = await fetch("http://localhost:7290/graphql/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operations),
      credentials: "include",
    });

    return await response.json();
  }
};

export const RelayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
