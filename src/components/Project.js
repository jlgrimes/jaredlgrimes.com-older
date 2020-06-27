import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Img from 'gatsby-image';

function Project({ project }) {
    const { frontmatter, html } = project;

    let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Card>
            <Img fluid={featuredImgFluid} />
            <Card.Content>
                <Card.Header>{frontmatter.title}</Card.Header>
                <Card.Meta>{frontmatter.date}</Card.Meta>
                <Card.Meta>{frontmatter.description}</Card.Meta>
                <Card.Description>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export { Project };
