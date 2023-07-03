import { defineConfig } from "sanity";
import {  deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schemas";

const config = defineConfig({
    projectId: "plt5qdnx",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-05-31",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: [project]
    }
});


export default config;