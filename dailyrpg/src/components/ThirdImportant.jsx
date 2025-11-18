import potions from "../assets/potions.png";

function ThirdImportant() {
  return (
    <div className="w-full md:w-fit flex flex-col items-center px-4 md:px-0  py-8 lg:-mt-2">
      
      <div>
        <img src={potions} alt="Poções" className="w-64 md:w-130" />
      </div>

      <div className="text-center max-w-md"> 
        
        <h1 className="text-amber-300 text-xl md:text-2xl font-bold -mt-10 md:-mt-13">
            Alquimia
        </h1>

        <p className="text-center text-white text-base mt-2">
            Use os ingredientes que você coleta ao completar contratos para criar poções poderosas que te deixam mais forte e preparado para os desafios.
        </p>
      </div>
    </div>
  );
}

export default ThirdImportant;