import collatedTasks from '../constants'

export default selectedProject =>
  collatedTasks.find(task => task.key === selectedProject)
