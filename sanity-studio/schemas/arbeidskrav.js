import Arbeidskrav from "../../src/components/Arbeidskrav"

export default {
    name: 'arbeidskrav',
  title: 'Arbeidskrav',
  type: 'document',
    fields: [ 
    { 
     name: 'tittel',
     title: 'Tittel',
     type: 'string',
     validation: (Rule) => Rule.required().max(100),
    },
    { 
        name:  'nummer',
        title: 'Arbeidskrav-nummer',
        type: 'nummer',
        validation: (Rule) => Rule.required().integer().positive(),
        
    },
    {
      name: 'beskrivelse',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
     },
     ],
     preview:{ 
        select: { title: 'tittel', subtitel:'nummer' },
        prepare({title,subtitel}) { 
            return {title, subtitel: `Arbeidskrav ${subtitel}` }
        },
     },
 }