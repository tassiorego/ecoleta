import React from 'react';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>
          <a href="/cadatro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
