import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I have worked on various projects, primarily focusing on web applications. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEBSITES</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEBSITES</ToggleButton>
          }
          <Divider />
          {toggle === 'uiux' ?
            <ToggleButton active value="uiux" onClick={() => setToggle('uiux')}>UI/UX</ToggleButton>
            :
            <ToggleButton value="uiux" onClick={() => setToggle('uiux')}>UI/UX</ToggleButton>
          }
          <Divider />
          {toggle === 'fullstack' ?
            <ToggleButton active value="fullstack" onClick={() => setToggle('fullstack')}>FULLSTACK</ToggleButton>
            :
            <ToggleButton value="fullstack" onClick={() => setToggle('fullstack')}>FULLSTACK</ToggleButton>
          }
          <Divider />
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects