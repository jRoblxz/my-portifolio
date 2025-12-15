import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
}

// Interface para o estilo saber se está visível ou não
interface WrapperProps {
  $visible: boolean;
}

const BtnTop: React.FC<ButtonProps> = ({ onClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      // Se rolar mais de 300px, o botão aparece
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    // Limpeza do evento quando o componente desmontar
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <StyledWrapper $visible={visible}>
      <button className="button" onClick={onClick}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<WrapperProps>`
  /* --- Posicionamento Fixo na Tela --- */
  position: fixed;
  bottom: 40px; /* Distância do fundo */
  right: 40px;  /* Distância da direita */
  z-index: 1000; /* Garante que fique acima de tudo */

  /* --- Controle de Visibilidade --- */
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')}; /* Evita clique quando invisível */
  transition: opacity 0.4s ease-in-out;

  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px #e4e0d7;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #7C3AED;
    align-items: center;
  }

  .button:hover .svgIcon {
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: white;
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  }
`;

export default BtnTop;