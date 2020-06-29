/** @jsx jsx */
import React, { Fragment } from 'react';
import { Feed } from 'semantic-ui-react';
import Img from 'gatsby-image';
import { css, jsx } from '@emotion/core';

const ExperienceFeedContentStyles = css`
margin-top: 0 !important;
`

const ExperienceTitleStyles = css`
margin-bottom: 0.5em !important;
`

function Experience({ experience }) {
    const { frontmatter, html } = experience;

    let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Feed.Event>
            <Feed.Label image={featuredImgFluid}/>
            <Feed.Content css={ExperienceFeedContentStyles}>
                <Feed.Summary css={ExperienceTitleStyles}>
                    {frontmatter.title}
                    <Feed.Date content={frontmatter.subtitle} />
                </Feed.Summary>
                <Feed.Date content={frontmatter.date} />
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </Feed.Content>
        </Feed.Event>
    );
}

export { Experience };
