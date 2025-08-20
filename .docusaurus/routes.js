import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/doc/blog',
    component: ComponentCreator('/doc/blog', '676'),
    exact: true
  },
  {
    path: '/doc/blog/archive',
    component: ComponentCreator('/doc/blog/archive', '276'),
    exact: true
  },
  {
    path: '/doc/blog/authors',
    component: ComponentCreator('/doc/blog/authors', '704'),
    exact: true
  },
  {
    path: '/doc/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/doc/blog/authors/all-sebastien-lorber-articles', '9a4'),
    exact: true
  },
  {
    path: '/doc/blog/authors/yangshun',
    component: ComponentCreator('/doc/blog/authors/yangshun', '535'),
    exact: true
  },
  {
    path: '/doc/blog/first-blog-post',
    component: ComponentCreator('/doc/blog/first-blog-post', '7d9'),
    exact: true
  },
  {
    path: '/doc/blog/long-blog-post',
    component: ComponentCreator('/doc/blog/long-blog-post', 'd49'),
    exact: true
  },
  {
    path: '/doc/blog/mdx-blog-post',
    component: ComponentCreator('/doc/blog/mdx-blog-post', 'a0e'),
    exact: true
  },
  {
    path: '/doc/blog/tags',
    component: ComponentCreator('/doc/blog/tags', '0e7'),
    exact: true
  },
  {
    path: '/doc/blog/tags/docusaurus',
    component: ComponentCreator('/doc/blog/tags/docusaurus', 'cbe'),
    exact: true
  },
  {
    path: '/doc/blog/tags/facebook',
    component: ComponentCreator('/doc/blog/tags/facebook', 'cc9'),
    exact: true
  },
  {
    path: '/doc/blog/tags/hello',
    component: ComponentCreator('/doc/blog/tags/hello', '38d'),
    exact: true
  },
  {
    path: '/doc/blog/tags/hola',
    component: ComponentCreator('/doc/blog/tags/hola', 'aed'),
    exact: true
  },
  {
    path: '/doc/blog/welcome',
    component: ComponentCreator('/doc/blog/welcome', 'b99'),
    exact: true
  },
  {
    path: '/doc/markdown-page',
    component: ComponentCreator('/doc/markdown-page', '4d6'),
    exact: true
  },
  {
    path: '/doc/docs',
    component: ComponentCreator('/doc/docs', '16f'),
    routes: [
      {
        path: '/doc/docs',
        component: ComponentCreator('/doc/docs', '1c5'),
        routes: [
          {
            path: '/doc/docs',
            component: ComponentCreator('/doc/docs', '515'),
            routes: [
              {
                path: '/doc/docs/category/tutorial---basics',
                component: ComponentCreator('/doc/docs/category/tutorial---basics', '427'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/category/tutorial---extras',
                component: ComponentCreator('/doc/docs/category/tutorial---extras', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/intro',
                component: ComponentCreator('/doc/docs/intro', 'e04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/doc/docs/tutorial-basics/congratulations', '9fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/doc/docs/tutorial-basics/create-a-blog-post', 'bc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/doc/docs/tutorial-basics/create-a-document', '1c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/doc/docs/tutorial-basics/create-a-page', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/doc/docs/tutorial-basics/deploy-your-site', '0bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/doc/docs/tutorial-basics/markdown-features', '182'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/doc/docs/tutorial-extras/manage-docs-versions', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/doc/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/doc/docs/tutorial-extras/translate-your-site', '042'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/doc/',
    component: ComponentCreator('/doc/', '308'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
