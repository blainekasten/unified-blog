import React from "react"
import { Link, graphql } from "gatsby"

export default function Index(props) {
  return (
    <ul>
      <h1>Blog Topics</h1>
      {props.data.allMarkdownRemark.group.map(edge => {
        return (
          <li>
            <Link to={`/topics/${edge.edges[0].node.frontmatter.topic}`}>
              {edge.edges[0].node.frontmatter.topic}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export const Query = graphql`
  query MyQuery {
    allMarkdownRemark {
      group(field: frontmatter___topic) {
        edges {
          node {
            frontmatter {
              topic
            }
          }
        }
      }
    }
  }
`
