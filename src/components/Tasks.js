import React from 'react'
import Checkbox from './Checkbox'

const Tasks = () => {
  const tasks = []

  const projectName = ''
  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox key={`${task.id}`} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
