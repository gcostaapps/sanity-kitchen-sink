export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed87ff49f98c8311bb71536',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i69w6tpc',
                  apiId: '2696e330-9026-4809-bfdd-d276ca6220f4'
                },
                {
                  buildHookId: '5ed87ff37b43e6c500e5ba2e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mzghvxi2',
                  apiId: '39fa4fcf-944f-4782-9b10-63f4c48e0356'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gcostaapps/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mzghvxi2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
