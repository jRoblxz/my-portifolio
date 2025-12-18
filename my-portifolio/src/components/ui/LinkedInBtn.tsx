import React from 'react';
import styled from 'styled-components';

// Define a interface para as props customizadas
interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  bgColor?: string;
  iconPath?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  text = "LinkedIn",
  bgColor = "#0a66c2", // Cor padrão (LinkedIn)
  iconPath = "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z", // Icone padrão
  ...props // Restante das props nativas do botão (onClick, className, etc)
}) => {
  return (
    <StyledWrapper $bgColor={bgColor}>
      <button className="Btn" {...props}>
        <div className="sign">
          <svg 
            className="svgIcon" 
            viewBox="0 0 448 512" 
            height="1.6em" 
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={iconPath} />
          </svg>
        </div>
        <div className="text">{text}</div>
      </button>
    </StyledWrapper>
  );
}

// Interface para as props do Styled Component (usamos $ para props transientes)
interface WrapperProps {
  $bgColor: string;
}

const StyledWrapper = styled.div<WrapperProps>`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    /* Aqui aplicamos a cor dinâmica */
    background-color: ${props => props.$bgColor};
  }

  .sign {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 25px;
  }

  .sign svg path {
    fill: white;
  }

  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: 0.3s;
  }

  .Btn:hover {
    width: 135px;
    border-radius: 40px;
    transition-duration: 0.3s;
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: 0.3s;
    padding-left: 10px;
  }

  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: 0.3s;
    padding-right: 10px;
  }

  .Btn:active {
    transform: translate(2px, 2px);
  }
`;

export default SocialButton;