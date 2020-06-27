import 'semantic-ui-css/semantic.min.css';

import React, { Fragment } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { ProjectsView } from '../components/ProjectsView';
import { IntroView } from '../components/IntroView';

export default function Home({ data }) {
    // the map is to get the actual node from each edge
    const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);

    const projects = nodes.filter(
        node => node.fileAbsolutePath.indexOf(`projects`) > 0
    );

    return (
        <div>
            <Container>
                <IntroView />
                <ProjectsView projects={projects} />
            </Container>
        </div>
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
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        date(formatString: "MMMM DD, YYYY")
                        description
                        slug
                    }
                }
            }
        }
    }
`;
