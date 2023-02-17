import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata: any = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          image
          linkedinUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}
