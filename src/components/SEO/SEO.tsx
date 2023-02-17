import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import icon from "../../images/icon.png"

const SEO = ({
  title,
  description,
  pathname,
  children,
  imageEdit,
}: {
  title?: string
  description?: string
  pathname?: string
  imageEdit?: string
  children?: any
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    linkedinUsername,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: imageEdit ? imageEdit : `${image}`,
    url: `${siteUrl}${pathname || ``}`,
    linkedinUsername,
  }

  return (
    <React.Fragment>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:creator" content={seo.linkedinUsername} />
      <link rel="icon" href={icon} />
      {children}
    </React.Fragment>
  )
}

export default SEO
