import { defineConfig } from "sanity";
import {  deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "plt5qdnx",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-05-31",
    basePath: "/admin",
    plugins: [deskTool()]
});


export default config;