/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react'
import PropTypes from 'prop-types'
import { useProjectsValue } from '../context'

const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay
}) => {
  const { projects } = useProjectsValue()
  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li
              key={project.projectId}
              data-testid="project-overlay-action"
              onClick={() => {
                setProject(project.projectId)
                setShowProjectOverlay(false)
              }}
              onKeyPress={() => {
                setProject(project.projectId)
                setShowProjectOverlay(false)
              }}
              role="button"
              tabIndex="0"
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

ProjectOverlay.propTypes = {
  setProject: PropTypes.func.isRequired,
  showProjectOverlay: PropTypes.bool.isRequired,
  setShowProjectOverlay: PropTypes.func.isRequired
}

export default ProjectOverlay
