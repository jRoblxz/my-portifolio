// components/Button.tsx (ou onde você preferir salvar)
import React from "react";

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      // Adicionado 'overflow-hidden' para garantir a borda arredondada
      // e z-0 para criar contexto de empilhamento
      className="bg-[#1e1c1c] text-center w-48 rounded-2xl h-14 relative text-[#e4e0d7] text-xl font-semibold group cursor-pointer overflow-hidden z-0"
      type="button"
    >
      {/* Fundo Verde Animado */}
      <div className="bg-[#7c3aed] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500 transition-all ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#e4e0d7"
          />
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#e4e0d7"
          />
        </svg>
      </div>
      
      {/* Texto: Adicionado 'relative' e 'z-20' para garantir que fique ACIMA do verde */}
      <p className="translate-x-2 relative">Go Back</p>
    </button>
  );
};

export default Button;