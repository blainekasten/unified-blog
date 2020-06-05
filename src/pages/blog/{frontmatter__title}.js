import React from "react"
import { createPagesFromData, graphql } from "gatsby"

function Blog(props) {
  return (
    <>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </>
  )
}

export default createPagesFromData(Blog, `allMarkdownRemark`)

export const Query = graphql`
  query Blog($frontmatter__title: String!) {
    markdownRemark(frontmatter: { title: { eq: $frontmatter__title } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
