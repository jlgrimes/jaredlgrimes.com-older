import React, { Fragment } from 'react';
import { Card, Feed } from 'semantic-ui-react';
import { Experience } from './Experience';

function ExperienceView({ experiences }) {
    return (
        <Card fluid>
            <Card.Content>
                <Feed>
                    {experiences.map(experience => (
                        <Experience experience={experience} />
                    ))}
                </Feed>
            </Card.Content>
        </Card>
    );
}

export { ExperienceView };
