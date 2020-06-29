import 'semantic-ui-css/semantic.min.css';

import React, { Fragment } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { ProjectsView, IntroView, ExperienceView } from '../components';

export default function Home({ data }) {
    // the map is to get the actual node from each edge
    const nodes = data.allMarkdownRemark.edges.map(edge => edge.node);

    const projects = nodes.filter(
        node => node.fileAbsolutePath.indexOf(`projects`) > 0
    );

    const experiences = nodes.filter(
        node =>
            node.fileAbsolutePath.indexOf(`work`) > 0 ||
            node.fileAbsolutePath.indexOf(`education`) > 0
    );

    return (
        <div>
            <Container>
                <IntroView />
                <ProjectsView projects={projects} />
                <ExperienceView experiences={experiences} />
            </Container>
        </div>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    html
                    fileAbsolutePath
                    frontmatter {
                        title
                        subtitle
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        date(formatString: "MMMM YYYY")
                        description
                        slug
                    }
                }
            }
        }
    }
`;
