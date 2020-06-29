/** @jsx jsx */
import React from 'react';
import { Header, Card, Image } from 'semantic-ui-react';
import propic from '../content/images/propic.jpg';
import { css, jsx } from '@emotion/core';

const IntroCardStyles = css`
    margin-top: 5em;
    margin-bottom: 5em;
`

const IntroCardImageStyles = css`
    width: 10em !important;
`;

const IntroCardTitleStyles = css`
    font-size: 2.5em;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
`;

const IntroCardSubtitleStyles = css`
    font-size: 1.25em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
`

function IntroView() {
    return (
        <div css={IntroCardStyles}>
            <Header icon textAlign="center">
                <Image css={IntroCardImageStyles} src={propic} circular />
                <Header.Content css={IntroCardTitleStyles}>Hi, I'm Jared.</Header.Content>
                <div css={IntroCardSubtitleStyles}>I am a web developer.</div>
            </Header>
        </div>
    );
}

export { IntroView };
