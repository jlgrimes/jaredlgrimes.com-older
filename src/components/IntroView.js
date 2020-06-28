/** @jsx jsx */
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import propic from '../content/images/propic.jpg';
import { css, jsx } from '@emotion/core';

const IntroCardContentStyles = css`
    justify-content: center
`

function IntroView() {
    return (
        <Card.Group centered>
            <Card>
                <Card.Content>
                    <Image src={propic} circular size='small'/>
                    <Card.Header>Hi, I'm Jared</Card.Header>
                    <Card.Meta>Software engineer, quirky thing</Card.Meta>
                </Card.Content>
            </Card>
        </Card.Group>
    );
}

export { IntroView };
