/** @jsx jsx */
import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import { Project } from './Project';
import { css, jsx } from '@emotion/core';

const ProjectsViewStyles = css`
    padding-left: 5em;
    padding-right: 5em;
`

function ProjectsView({ projects }) {
    return (
        <Card.Group css={ProjectsViewStyles} centered>
            {projects.map(project => (
                <Project project={project} />
            ))}
        </Card.Group>
    );
}

export { ProjectsView };