/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { useSelectedProjectValue, useProjectsValue } from '../context'

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
  return projects.map(project => (
    <li
      key={project.projectId}
      data-doc-id={project.docId}
      data-testid="project-action"
      className={
        active === project.projectId
          ? 'active sidebar__project'
          : 'sidebar__project'
      }
      onClick={() => handleClick(project)}
      onKeyDown={() => handleClick(project)}
    >
      Project
    </li>
  ))
}

Projects.propTypes = {
  activeValue: PropTypes.bool
}

export default Projects
