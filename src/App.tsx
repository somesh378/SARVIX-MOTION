import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './styles/app.css'

// Screens (to be implemented)
// import Login from '@screens/Login'
// import Signup from '@screens/Signup'
// import Home from '@screens/Home'
// import NewProject from '@screens/NewProject'
// import ProjectEditor from '@screens/ProjectEditor'

function App() {
  return (
    <Router>
      <Routes>
        {/* TODO: Implement authentication screens */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/editor/:projectId" element={<ProjectEditor />} /> */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App
