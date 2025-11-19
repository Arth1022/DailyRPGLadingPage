import dragaodois from "../assets/dragaodois.png";

function Rank() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-8">
      
      <div className="mb-4">
        <img 
          src={dragaodois} 
          alt="Trophy" 
          className="w-64 md:w-96 mx-auto" 
        />
      </div>
      
      <h2 className="text-center text-purple-400 text-xl md:text-2xl font-bold mb-2">
        Chefes
      </h2>
      
      <p className="text-center text-white max-w-xs md:max-w-md">
        Enfrente poderosos chefes enquanto você termina contratos.
        Derrote-os para ganhar recompensas épicas
        e provar que você é o herói definitivo.
      </p>
    </div>
  );
}

export default Rank;