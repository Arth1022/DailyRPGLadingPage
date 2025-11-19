import battle from "../assets/battle.png";

function PVP() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-8">
      <div className="mb-4">
        <img src={battle} alt="Battle" className="w-64 md:w-96 mx-auto" />
      </div>

      <h2 className="text-center text-red-400 text-xl md:text-2xl font-bold mb-2">
        PVP
      </h2>

      <p className="text-center text-white max-w-xs md:max-w-md">
        Evolua suas skills de combate. Teste seu herói contra outros jogadores.
        Emocionantes combates PvP.
      </p>
    </div>
  );
}

export default PVP;
