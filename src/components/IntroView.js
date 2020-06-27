import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';

function IntroView() {
    return (
        <Fragment>
            <Card>
                <Card.Content>
                    <Card.Header>Hi, I'm Jared</Card.Header>
                    <Card.Meta>Software engineer, quirky thing</Card.Meta>
                </Card.Content>
            </Card>
        </Fragment>
    );
}

export { IntroView };