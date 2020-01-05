import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ProjectsProvider, SelectedProjectProvider } from './context'

import Header from './components/layout/Header'
import Content from './components/layout/Content'

const App = ({ darkModeDefault }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault)
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          className={darkMode ? 'darkmode' : undefined}
          data-testid="application"
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

App.propTypes = {
  darkModeDefault: PropTypes.bool
}

App.defaultProps = {
  darkModeDefault: false
}

export default App
