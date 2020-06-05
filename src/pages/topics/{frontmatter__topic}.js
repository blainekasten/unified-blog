import React from "react"
import { Link, createPagesFromData, graphql } from "gatsby"

function Topic(props) {
  return (
    <div>
      <h1>{props.params.frontmatter__topic} Topic</h1>
      <ul>
        {props.data.allMarkdownRemark.nodes.map(blog => {
          return (
            <Link to={`/blog/${blog.frontmatter.title}`} key={blog.id}>
              {blog.frontmatter.title}
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default createPagesFromData(
  Topic,
  `{allMarkdownRemark {
        group(field: frontmatter___topic) {
            ...CollectionPagesQueryFragment
        }
    }}`
)

export const Query = graphql`
  query MyQueryHere($frontmatter__topic: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { topic: { eq: $frontmatter__topic } } }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`
