import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ListSummaryFromEdges from './ListSummaryFromEdges'

export default function ListComponents() {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: {
            title: { ne: null, nin: "Fragments" }
            draft: { ne: true }
          }
          internal: {
            contentFilePath: { glob: "**/uilib/components/**/*" }
          }
        }
        sort: { fields: [frontmatter___order, frontmatter___title] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `)

  return <ListSummaryFromEdges edges={edges} />
}