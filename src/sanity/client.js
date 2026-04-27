import { createClient } from "@sanity/client";


export const client = createClient({
 
projectId: 'owyughhf',
dataset: 'priduction',
apiVersion: '2024-01-01',
useCdn: true,
})