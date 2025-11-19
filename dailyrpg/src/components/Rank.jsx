import trofeu from "../assets/trofeu.png";

function Rank() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-8">
      <div>
        <img src={trofeu} alt="Trophy" className="w-64 md:w-100" />
      </div>
      <h2 className="text-center text-amber-400 text-2xl font-bold">Rank</h2>
      <p className="text-center text-white max-w-xs md:max-w-md">
        Suba no ranking global <br />
        Compita com outros jogadores <br />
        e mostre quem é o melhor herói.
      </p>
    </div>
  );
}

export default Rank;