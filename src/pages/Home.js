import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import projectsData from '../data/projects.json';
import '../styles/Home.css';

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

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <h1>Bem-vindo ao meu Portfolio</h1>
        <p>Sou um Engenheiro da computação recém-formado, buscando ampliar meu 
            conhecimento e experiência na área. Tenho experiência em Flutter, React, 
            e gerenciamento de estado, 
            além de trabalhar com JSON e APIs. Estou entusiasmado para enfrentar 
            novos desafios e contribuir com soluções inovadoras.</p>
        <Button onClick={() => window.location.href = '/projects'}>
          Veja meus projetos
        </Button>

        {/* Seção de Projetos */}
        <div className="projects-section">
          <h2>Projetos recentes</h2>
          <div className="projects-list">
            {projectsDataWithImages.slice(0, 3).map((project) => (
              <Card
              className='card-image2'
              image={project.images[0]}
              onClick={() => window.location.href = '/projects'}
            />
            
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
