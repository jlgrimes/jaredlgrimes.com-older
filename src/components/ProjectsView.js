import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import { Project } from './Project';

function ProjectsView({ projects }) {
    return (
        <Card.Group centered itemsPerRow={2}>
            {projects.map(project => (
                <Project project={project} />
            ))}
        </Card.Group>
    );
}

export { ProjectsView };