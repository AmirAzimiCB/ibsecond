import {defineType, defineArrayMember} from 'sanity'

const CenteredTextRenderer = ({children}) => <div style={{textAlign: 'center'}}>{children}</div>
const ColoredTextRenderer = ({mark, children}) => <span style={{color: mark}}>{children}</span>

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Centered Text', value: 'centered', blockEditor: {render: CenteredTextRenderer}},
        {title: 'Text Color: Red', value: 'red'},
        {title: 'Text Color: Blue', value: 'blue'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          // {title: 'Highlight', value: 'highlight'},
          {
            title: 'Highlight',
            value: 'highlight',
            icon: () => 'H',
          },
        ],
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
    }),

    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          title: 'Image Width',
          name: 'width',
          type: 'number',
          options: {
            list: [
              {title: 'Full Screen Width', value: 100},
              {title: 'Half Width', value: 50},
              {title: 'Quarter Width', value: 25},
            ],
          },
        },
      ],
    }),
    defineArrayMember({
      type: 'youtube',
    }),
  ],
})
