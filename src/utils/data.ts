import { Children } from "react";

export const files = {
  id: 1,
  name: 'Workspace',
  isDirectory: true,
  children: [
    {
      id: 2,
      name: 'Code',
      isDirectory: true,
      children: [
        {
          id: 3,
          name: 'Dir1',
          isDirectory: true,
          children: [
            {
              id: 4,
              name: 'file5',
              isDirectory: false,
              content: 'this is very good'
            },
            {
              id: 5,
              name: 'file6',

              isDirectory: false,
              content: 'this is very good'
            },


          ]
        },

        {
          id: 6,
          name: 'file1',
          isDirectory: false,
          content: 'this is very good'
        },
        {
          id: 7,
          name: 'file2',

          isDirectory: false,
          content: 'this is very good'
        },
        {
          id: 8,
          name: 'file1',
          isDirectory: false,
          content: 'this is very good'
        },

      ]
    }, {
      id: 21,
      name: 'real file',
      isDirectory: false,
      content: 'real shit'
    }
  ]

}
