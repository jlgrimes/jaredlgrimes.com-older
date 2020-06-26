import React from 'react';

function Project({ project }) {
    console.log(project)
    const { frontmatter, html } = project;

    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <h2>{frontmatter.description}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}

export { Project };