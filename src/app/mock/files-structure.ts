import { FileNode } from '../models';

export const filesStructure: FileNode[] = [
  {
    name: 'root',
    type: 'folder',
    children: [
      {
        name: 'dir1',
        type: 'folder',
        children: [
          {
            name: 'diry',
            type: 'folder',
            children: [
              {
                name: 'file3.ext',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        name: 'dir2',
        type: 'folder',
        children: [
          {
            name: 'dirx',
            type: 'folder',
            children: [
              {
                name: 'file.ext',
                type: 'file',
              },
              {
                name: 'file1.ext',
                type: 'file',
              },
            ],
          },
          {
            name: 'file2.ext',
            type: 'file',
          },
        ],
      },
      {
        name: 'dir3',
        type: 'folder',
        children: [
          {
            name: 'dirz',
            type: 'folder',
            children: [
              {
                name: 'file4.ext',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        name: 'dir4',
        type: 'folder',
        children: [
          {
            name: 'dira',
            type: 'folder',
            children: [
              {
                name: 'file5.ext',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        name: 'dir5',
        type: 'folder',
        children: [
          {
            name: 'dirb',
            type: 'folder',
            children: [
              {
                name: 'file6.ext',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        name: 'dir6',
        type: 'folder',
        children: [
          {
            name: 'dir0',
            type: 'folder',
            children: [
              {
                name: 'file7.ext',
                type: 'file',
              },
              {
                name: 'file8.ext',
                type: 'file',
              },
              {
                name: 'file9.ext',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        name: 'dir7',
        type: 'folder',
        children: [
          {
            name: 'dirc',
            type: 'folder',
            children: [
              {
                name: 'dire',
                type: 'folder',
                children: [],
              },
              {
                name: 'dirv',
                type: 'folder',
                children: [
                  {
                    name: 'file11.ext',
                    type: 'file',
                  },
                ],
              },
              {
                name: 'file12.ext',
                type: 'file',
              },
            ],
          },
        ],
      },
      {
        name: 'file10.ext',
        type: 'file',
      },
    ],
  },
];
