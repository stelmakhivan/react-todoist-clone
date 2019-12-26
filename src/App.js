import React from 'react'

import { ProjectsProvider, SelectedProjectProvider } from './context'

import Header from './components/layout/Header'
import Content from './components/layout/Content'

const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

export default App
