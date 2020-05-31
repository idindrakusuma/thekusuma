/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/thekusuma`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-eslint',
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@helpers': 'src/helpers',
          '@pages': 'src/pages',
          '@assets': 'src/assets',
          '@': 'src',
        },
      },
    },
  ],
};
