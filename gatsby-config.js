module.exports = {
  siteMetadata: {
    title: `Sasha Travis`,
    description: `Female voiceover artist, actor`,
    author: `@sashamtravis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, //Put in metatags in html in header
    {
      resolve: `gatsby-source-filesystem`, //get files from local files to Gatsby's graphql schema
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, //Lazy Loading for Images
    {
      resolve: `gatsby-plugin-manifest`, //Configuration for PWA
      options: {
        name: `Sasha Travis`,
        short_name: `Sasha`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
