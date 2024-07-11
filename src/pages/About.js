import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-content">
        <h1>Sobre mim</h1>
        <p>
          Atualmente, sou Desenvolvedor na GTFoods, onde atuo principalmente com Flutter, Apex e Python para backend. 
          Minha função envolve a criação de aplicativos móveis modernos e eficientes com Flutter, a implementação de 
          lógica de negócios complexa utilizando Apex, e o desenvolvimento de soluções robustas de backend em Python. 
          Tenho paixão por resolver problemas desafiadores e por contribuir para a inovação e sucesso da empresa.
        </p>
        <div className="icons">
          <Button 
            className="social-button"
            icon={<FontAwesomeIcon icon={faLinkedin} />}
            onClick={() => window.open('https://www.linkedin.com/in/vinícius-mota-zulianelli-5837891a1', '_blank')}
          >
            LinkedIn
          </Button>
          <Button 
            className="social-button"
            icon={<FontAwesomeIcon icon={faGithub} />}
            onClick={() => window.open('https://github.com/ViniciusaiGP/', '_blank')}
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
