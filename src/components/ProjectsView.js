import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import { Project } from './Project';

function ProjectsView({ projects }) {
    return (
        <Card.Group>
            {projects.map(project => (
                <Project project={project} />
            ))}
        </Card.Group>
    );
}

export { ProjectsView };