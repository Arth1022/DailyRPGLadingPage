import dragao_tesouro from "../assets/dragao_tesouro.png";

function SecondImportant() {
  return (
    <div className="w-full md:w-fit flex flex-col items-center px-4 md:px-0  py-8">
      
      <div>
        <img src={dragao_tesouro} alt="Dragão Tesouro" className="w-64 md:w-130" />
      </div>

      <div className="text-center max-w-md"> 
        
        <h1 className="text-amber-300 text-xl md:text-2xl font-bold -mt-10 md:-mt-13">
          Equipe seu herói
        </h1>

        <p className="text-center text-white text-base mt-2">
          Cumpra contratos para ganhar tesouros e fortalecer seu herói. 
          Enfrente dragões e desafios épicos enquanto avança em sua jornada. 
          Use suas recompensas para comprar ou forjar itens e melhorar suas habilidades!
        </p>
      </div>
    </div>
  );
}

export default SecondImportant;