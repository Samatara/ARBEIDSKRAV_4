import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'UIN Oblig 4',
    projectId: 'owyughhf',
    dataset: 'production',
    plugins: [structureTool(), visionTool()],
    schema:{ types: schemaTypes},
})