export default {
    title: 'Rich Text',
    name: 'richText',
    type: 'array',
    of: [
      {
        type: 'block',
        title: 'Block',
        // Marks let you mark up inline text in the block editor.
        marks: {
          // Decorators usually describe a single property – e.g. a typographic
          // preference or highlighting by editors.
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
          ],
          // Annotations can be any object structure – e.g. a link or a footnote.
          annotations: [
            {
              title: 'URL',
              name: 'link',
              type: 'object',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                },
              ],
            },
          ],
        },
      },
      {
        type: 'customImage',
      },
    ],
  };