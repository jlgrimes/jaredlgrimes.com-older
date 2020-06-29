import React, { Fragment } from 'react';
import { Card, Feed, Header } from 'semantic-ui-react';
import { Experience } from './Experience';

function ExperienceView({ experiences }) {
    return (
        <Fragment>
            <Header size="huge">Experience</Header>
            <Card fluid>
                <Card.Content>
                    <Feed>
                        {experiences.map(experience => (
                            <Experience experience={experience} />
                        ))}
                    </Feed>
                </Card.Content>
            </Card>
        </Fragment>
    );
}

export { ExperienceView };
