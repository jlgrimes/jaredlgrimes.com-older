/** @jsx jsx */
import React, { Fragment } from 'react';
import { Card, Image, Reveal } from 'semantic-ui-react';
import Img from 'gatsby-image';
import { css, jsx } from '@emotion/core';

const ProjectOverlayStyles = css`
    z-index: 10;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.4s ease;
    background-color: black;
    &:hover {
        opacity: 0.75;
    }
`;

const ProjectOverlayTextStyles = css`
    color: white;
    font-size: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1 !important;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`;

function Project({ project }) {
    const { frontmatter, html } = project;

    let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Card link href={frontmatter.slug}>
            <a className="overlay" css={ProjectOverlayStyles}>
                <div css={ProjectOverlayTextStyles}>
                    <Card.Content>
                        <Card.Header>{frontmatter.title}</Card.Header>
                    </Card.Content>
                </div>
            </a>
            <Img fluid={featuredImgFluid} />
        </Card>
    );
}

export { Project };
