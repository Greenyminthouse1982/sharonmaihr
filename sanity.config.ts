import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "SharonMaiHR",

  projectId: "k69msobs",
  dataset: "production",

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        initial: "/",
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});