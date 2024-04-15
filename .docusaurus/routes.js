import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '76d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'dce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '175'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '448'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '789'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'a6f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '46b'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '540'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '799'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6a7'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '447'),
            routes: [
              {
                path: '/code/CSS/current',
                component: ComponentCreator('/code/CSS/current', '993'),
                exact: true,
                sidebar: "codeSidebar"
              },
              {
                path: '/code/Go/manage-docs-versions',
                component: ComponentCreator('/code/Go/manage-docs-versions', 'ce4'),
                exact: true,
                sidebar: "codeSidebar"
              },
              {
                path: '/code/Html/manage-docs-versions',
                component: ComponentCreator('/code/Html/manage-docs-versions', 'd11'),
                exact: true,
                sidebar: "codeSidebar"
              },
              {
                path: '/code/translate-your-site',
                component: ComponentCreator('/code/translate-your-site', '45e'),
                exact: true,
                sidebar: "codeSidebar"
              },
              {
                path: '/courses/manage-docs-versions',
                component: ComponentCreator('/courses/manage-docs-versions', '461'),
                exact: true,
                sidebar: "courseSidebar"
              },
              {
                path: '/fragments/manage-docs-versions',
                component: ComponentCreator('/fragments/manage-docs-versions', 'aaf'),
                exact: true,
                sidebar: "fragmentSidebar"
              },
              {
                path: '/tools/ffmpeg/manage-docs-versions',
                component: ComponentCreator('/tools/ffmpeg/manage-docs-versions', 'ee0'),
                exact: true,
                sidebar: "toolSidebar"
              },
              {
                path: '/tools/manage-docs-versions',
                component: ComponentCreator('/tools/manage-docs-versions', 'c81'),
                exact: true,
                sidebar: "toolSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
