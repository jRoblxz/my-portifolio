import React from 'react';

export const BB8Toggle = () => {
  return (
    // O container principal. A classe text-[16px] substitui a variável --toggle-size.
    // Mudar este valor irá escalar o componente inteiro, assim como no original.
    <label className="bb8-toggle relative cursor-pointer text-[16px]">
      {/* O input é invisível, mas controla o estado. A classe "peer" é a chave para a animação. */}
      <input type="checkbox" className="peer absolute h-0 w-0 appearance-none" />

      {/* Container principal que muda com base no estado "peer-checked" */}
      <div
        className="
          relative h-[5.625em] w-[10.625em] rounded-full
          bg-[linear-gradient(#2c4770,#070e2b_35%,#628cac_50%_70%,#a6c5d4)] bg-[length:100%_11.25em] bg-no-repeat 
          transition-all duration-400
          bg-[position:0em_-5.625em] peer-checked:bg-[position:0em_0em]
        "
      >
        {/* --- Cenário (Estrelas, Planetas, etc.) --- */}
        <div className="scenery pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          {/* Fundo do deserto */}
          <div className="absolute bottom-0 h-[30%] w-full bg-[#b18d71] [z-index:1]"></div>

          {/* Estrelas (a posição muda com peer-checked) */}
          <div className="absolute left-[3.75em] top-full h-[0.063em] w-[0.063em] rounded-full bg-white text-white shadow-[1.25em_0.938em,_-1.25em_2.5em,_0_1.25em,_1.875em_0.625em,_-3.125em_1.875em,_1.25em_2.813em] drop-shadow-[0_0_0.063em_#fff] transition-[top] duration-200 peer-checked:top-[0.625em]"></div>
          <div className="absolute left-[4.688em] top-full h-[0.063em] w-[0.063em] rounded-full bg-white text-white shadow-[0.625em_0,_0_0.625em,_-0.625em_-0.625em,_0.625em_0.938em,_-3.125em_1.25em,_1.25em_-1.563em] drop-shadow-[0_0_0.063em_#fff] transition-[top] duration-300 peer-checked:top-[1.875em]"></div>
          <div className="absolute left-[5.313em] top-full h-[0.063em] w-[0.063em] rounded-full bg-white text-white shadow-[-0.625em_-0.625em,_-2.188em_1.25em,_-2.188em_0,_-3.75em_-0.625em,_-3.125em_-0.625em,_-2.5em_-0.313em,_0.75em_-0.625em] drop-shadow-[0_0_0.063em_#fff] transition-[top] duration-400 peer-checked:top-[1.25em]"></div>
          <div className="absolute left-[1.875em] top-full h-[0.125em] w-[0.125em] rounded-full bg-white drop-shadow-[0_0_0.063em_#fff] transition-[top] duration-500 peer-checked:top-[3.438em]"></div>
          <div className="absolute left-[5em] top-full h-[0.125em] w-[0.125em] rounded-full bg-white drop-shadow-[0_0_0.063em_#fff] transition-[top] duration-700 peer-checked:top-[3.438em]"></div>
          <div className="absolute left-[2.5em] top-full h-[0.125em] w-[0.125em] rounded-full bg-white drop-shadow-[0_0_0.063em_#fff] transition-[top] duration-700 peer-checked:top-[0.313em]"></div>
          <div className="absolute left-[3.438em] top-full h-[0.125em] w-[0.125em] rounded-full bg-white drop-shadow-[0_0_0.063em_#fff] transition-[top] duration-[800ms] peer-checked:top-[1.875em]"></div>

          {/* Planetas Tattoine */}
          <div className="absolute right-[3.125em] top-[0.625em] h-[1.25em] w-[1.25em] rounded-full bg-[#fefefe] shadow-[0_0_0.438em_#fdf4e1] transition-all duration-400 peer-checked:top-full"></div>
          <div className="absolute right-[1.25em] top-[2.188em] h-[1.25em] w-[1.25em] rounded-full bg-gradient-to-b from-[#e6ac5c] to-[#d75449] shadow-[0_0_0.438em_#e6ad5c3d,0_0_0.438em_#d755494f] transition-all duration-700 peer-checked:top-full"></div>

          {/* Edifícios de Mos Eisley */}
          <div className="absolute left-[0.938em] top-full h-[1.875em] w-[1.875em] rounded-full bg-gradient-to-b from-white to-[#6e8ea2] shadow-[0_0_0.188em_#ffffff52,0_0_0.188em_#6e8ea24b] transition-all duration-400 peer-checked:top-[0.938em] 
            before:absolute before:left-[0.313em] before:top-[0.313em] before:h-[0.438em] before:w-[0.438em] before:rounded-full before:bg-gray-300 before:shadow-[inset_0_0_0.063em_rgb(140,162,169)] before:content-['']
            after:absolute after:left-[1.25em] after:top-[0.75em] after:h-[0.25em] after:w-[0.25em] after:rounded-full after:bg-gray-300 after:shadow-[inset_0_0_0.063em_rgb(140,162,169)] after:content-['']"
          ></div>
          <div className="absolute left-[3.438em] top-full h-[0.625em] w-[0.625em] rounded-full bg-gradient-to-b from-white to-[#6e8ea2] shadow-[0_0_0.125em_#ffffff52,0_0_0.125em_#6e8ea24b] transition-all duration-500 peer-checked:top-[2.5em]"></div>
          <div className="absolute left-[4.375em] top-full h-[0.5em] w-[0.5em] rounded-full bg-gradient-to-b from-white to-[#6e8ea2] shadow-[0_0_0.125em_#ffffff52,0_0_0.125em_#6e8ea24b] transition-all duration-[800ms] peer-checked:top-[2.75em]"></div>
        </div>

        {/* --- Droide BB-8 --- */}
        <div
          className="
            absolute left-[0.625em] top-[-0.125em] z-10 flex flex-col items-center
            transition-all duration-400
            peer-checked:left-[calc(100%-4.375em-0.625em)]
          "
        >
          {/* Cabeça do BB-8 */}
          <div
            className="
              relative z-10 origin-[1.25em_3.75em] transition-transform duration-400
              active:peer-checked:rotate-[-25deg] active:rotate-[25deg]
            "
          >
            <div className="absolute right-[0.938em] h-[0.938em] w-[0.059em] -translate-y-[90%] rounded-t-full bg-gradient-to-b from-black from-10% to-silver to-10% transition-all duration-400 peer-hover:not(:peer-checked):right-[1.5em]"></div>
            <div className="absolute left-1/2 h-[0.375em] w-[0.059em] -translate-x-1/2 -translate-y-[90%] rounded-t-full bg-silver transition-all duration-400 peer-hover:peer-checked:left-[calc(100%-0.938em)] peer-hover:not(:peer-checked):left-[0.938em]"></div>
            <div
              className="
                relative z-[1] mb-[-0.188em] h-[1.688em] w-[2.5em] overflow-hidden rounded-t-full drop-shadow-[0_0.063em_0.125em_gray]
                bg-[linear-gradient(transparent_0.063em,dimgray_0.063em_0.313em,transparent_0.313em_0.375em,#de7d2f_0.375em_0.5em,transparent_0.5em_1.313em,silver_1.313em_1.438em,transparent_1.438em),linear-gradient(45deg,transparent_0.188em,#fff_0.188em_1.25em,transparent_1.25em),linear-gradient(-45deg,transparent_0.188em,#fff_0.188em_1.25em,transparent_1.25em),linear-gradient(#fff_1.25em,transparent_1.25em)]
                
                before:absolute before:left-1/2 before:top-[0.413em] before:z-[1] before:h-[0.563em] before:w-[0.563em] before:-translate-x-1/2 before:rounded-full before:shadow-[0_0_0_0.089em_lightgray,0.563em_0.281em_0_-0.148em,0.563em_0.281em_0_-0.1em_#fff,0.563em_0.281em_0_-0.063em] before:transition-all before:duration-400 before:content-['']
                before:bg-[radial-gradient(0.125em_circle_at_0.25em_0.375em,red,transparent),radial-gradient(0.063em_circle_at_0.375em_0.188em,#fff_50%,transparent_100%),linear-gradient(45deg,#000_0.188em,dimgray_0.313em_0.375em,#000_0.5em)]
                peer-hover:peer-checked:before:left-0 peer-hover:not(:peer-checked):before:left-full
                
                after:absolute after:bottom-[0.375em] after:left-0 after:h-[0.188em] after:w-full after:transition-[background-position] after:duration-400 after:content-['']
                after:bg-[linear-gradient(to_right,var(--accent)_0.125em,transparent_0.125em_0.188em,var(--accent)_0.188em_0.313em,transparent_0.313em_0.375em,var(--accent)_0.375em_0.938em,transparent_0.938em_1em,var(--accent)_1em_1.125em,transparent_1.125em_1.875em,var(--accent)_1.875em_2em,transparent_2em_2.063em,var(--accent)_2.063em_2.25em,transparent_2.25em_2.313em,var(--accent)_2.313em_2.375em,transparent_2.375em_2.438em,var(--accent)_2.438em)]
                peer-hover:peer-checked:after:bg-[position:-1.375em_0] peer-hover:not(:peer-checked):after:bg-[position:1.375em_0]"
            ></div>
          </div>
          {/* Corpo do BB-8 */}
          <div
            className="
              relative z-0 h-[4.375em] w-[4.375em] overflow-hidden rounded-full bg-[#fff]
              transition-transform duration-400 rotate-45 peer-checked:rotate-[225deg]
              bg-[linear-gradient(-90deg,#fff_4%,#de7d2f_4%_10%,transparent_10%_90%,#de7d2f_90%_96%,#fff_96%),linear-gradient(#fff_4%,#de7d2f_4%_10%,transparent_10%_90%,#de7d2f_90%_96%,#fff_96%),linear-gradient(to_right,transparent_2.156em,silver_2.156em_2.219em,transparent_2.188em),linear-gradient(transparent_2.156em,silver_2.156em_2.219em,transparent_2.188em)]

              before:absolute before:left-1/2 before:top-1/2 before:z-[0.1] before:h-[2.625em] before:w-[2.625em] before:-translate-x-1/2 before:-translate-y-1/2 before:overflow-hidden before:rounded-full before:border-[0.313em] before:border-[#de7d2f] before:content-['']
              before:bg-[radial-gradient(1em_circle_at_center,rgb(236,236,236)_50%,transparent_51%),radial-gradient(1.25em_circle_at_center,#fff_50%,transparent_51%),linear-gradient(-90deg,transparent_42%,#de7d2f_42%_58%,transparent_58%),linear-gradient(#fff_42%,#de7d2f_42%_58%,#fff_58%)]

              after:absolute after:bottom-[1.5em] after:left-[0.563em] after:h-[0.188em] after:w-[0.188em] after:rounded-full after:bg-gray-200 after:text-gray-200 after:shadow-[0.875em_0.938em,0_-1.25em,0.875em_-2.125em,2.125em_-2.125em,3.063em_-1.25em,3.063em_0,2.125em_0.938em] after:content-['']"
          ></div>
        </div>

        {/* --- Sombra do BB-8 --- */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <div
            className="
              absolute bottom-0 left-[calc(0.625em-0.938em)] z-0 h-[20%] w-[4.375em] rounded-full
              bg-[#3a271c] opacity-25 shadow-[0.313em_0_3.125em_#3a271c]
              transition-all duration-400
              skew-x-[-70deg] peer-checked:left-[calc(100%-4.375em-0.625em+0.938em)] peer-checked:skew-x-[70deg]
            "
          ></div>
        </div>
      </div>
    </label>
  );
};