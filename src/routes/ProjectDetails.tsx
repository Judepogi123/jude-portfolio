import React from 'react'

//lib
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
    const {projectID} = useParams()
  return (
    <div>{projectID}</div>
  )
}

export default ProjectDetails