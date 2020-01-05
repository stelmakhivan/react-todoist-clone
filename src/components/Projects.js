import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { useSelectedProjectValue, useProjectsValue } from '../context'

import IndividualProject from './IndividualProject'

const Projects = ({ activeValue = true }) => {
  const [active, setActive] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects = [] } = useProjectsValue()

  const handleClick = useCallback(
    project => {
      setActive(project.projectId)
      setSelectedProject(project.projectId)
    },
    [setSelectedProject]
  )
  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => handleClick(project)}
          onKeyDown={() => handleClick(project)}
          className="sidebar__project-item"
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  )
}

Projects.propTypes = {
  activeValue: PropTypes.bool
}

export default Projects
