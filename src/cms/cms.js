import CMS, { init } from 'netlify-cms'

init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'master',
    },
    media_folder: 'static/img',
    public_folder: '/img',
    htmlTitle: 'Homepage CMS',
    collections: [
      {
        name: 'drawings',
        folder: 'src/drawings',
        create: true,
        fields: [
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Publish Date', name: 'date', widget: 'datetime' },
        ],
      },
    ],
  },
})
