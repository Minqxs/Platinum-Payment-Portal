import {
    Environment,
    Network,
    RecordSource,
    Store,
    FetchFunction,
} from "relay-runtime";

// Custom fetch function that supports file uploads
const fetchGraphQL: FetchFunction = async (params, variables) => {
    const formData = new FormData();

    const operations = {
        query: params.text,
        variables: {...variables},
    };

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

    formData.append("operations", JSON.stringify(operations));
    formData.append("map", JSON.stringify(fileMap));

    const response = await fetch("/graphql", {
        method: "POST",
        body: formData,
    });

    return await response.json();
};

// Create Relay Environment
export const RelayEnvironment = new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
});
