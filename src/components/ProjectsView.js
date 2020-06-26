import React, { Fragment } from 'react';
import { Project } from './Project';

function ProjectsView({ projects }) {
    return (
        <Fragment>
            {projects.map(project => (
                <Project project={project} />
            ))}
        </Fragment>
    );
}

export { ProjectsView };