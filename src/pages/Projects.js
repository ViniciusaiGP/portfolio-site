import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import projectsData from '../data/projects.json';
import '../styles/Projects.css';

// Importando imagens
import project1_1 from '../images/project1-1.jpg';
import project1_2 from '../images/project1-2.jpg';
import project1_3 from '../images/project1-3.jpg';
import project1_4 from '../images/project1-4.jpg';
import project1 from '../images/project1.jpg';

// Mapeando as imagens para os projetos
const projectsDataWithImages = projectsData.map(project => {
  let images;
  switch (project.id) {
    case 1:
      images = [project1, project1_1, project1_2, project1_3, project1_4];
      break;
    default:
      images = [];
  }
  return { ...project, images };
});

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulando uma requisição ao servidor
    setProjects(projectsDataWithImages);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <Navbar />
      <h1>Projetos recentes</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.images[0]} // Exibe a primeira imagem no cartão
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      {selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
    </div>
  );
};

export default Projects;
