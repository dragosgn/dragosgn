require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `@dragosgn`,
    author: `Dragos Nedelcu`,
    description: `Hi, I am Dragos. I write about software, leadership and entepreneurship.`,
    siteUrl: `https://www.dragosgn.com/`,
    image: "/media/profile-pic.jpg", // Path to your image you placed in the 'static' folder
    social: {
      twitter: `https://twitter.com/dragosgn`,
      github: `https://github.com/dragosgn`,
      linkedin: `https://www.linkedin.com/in/dragosnedelcu/`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/media`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-social-cards`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-62374624-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dragos Nedelcu - Blog`,
        short_name: `Dragos Nedelcu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/media/dragos-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    // `gatsby-plugin-stripe`,
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ["Sku"],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: true,
    //   },
    // },
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: "gatsby-source-goodreads",
    //   options: {
    //     developerKey: process.env.GOODREADS_DEV_KEY,
    //     goodReadsUserId: process.env.GOODREADS_USER_ID,
    //     userShelf: "public", //optional
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
