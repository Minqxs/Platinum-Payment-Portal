module.exports = {
    language: "typescript",
    src: "./src",
    eagerEsModules: true,
    schema: "./schemas/schema.gql",
    customScalars: {
        TimeSpan: "string",
        URL: "string",
        DateTime: "string",
        UUID: "string",
        Upload: "File",
    },
};
