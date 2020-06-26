import React from 'react';
import { ProjectsView } from '../components/ProjectsView' 

export default function Home({ data }) {
    // the map is to get the actual node from each edge
    const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);

    const projects = nodes.filter(node =>
        node.fileAbsolutePath.indexOf(`projects`) > 0
    );

    return (
        <ProjectsView projects={projects} />
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    html
                    fileAbsolutePath
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        description
                        slug
                    }
                }
            }
        }
    }
`;
