import boss from "../assets/boss.png";
import battlecamp from "../assets/battlecamp.png";

function BossScreen() {
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      {/* ALTERAÇÕES NESTA DIV:
        1. flex-col: Empilha as imagens em telas pequenas.
        2. md:flex-row: Coloca lado a lado a partir de telas médias (tablets/desktop).
        3. items-center: Centraliza as imagens na coluna.
        4. md:items-end: Alinha pela base quando estiverem lado a lado.
      */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8">
        <img src={boss} alt="Home" className="mx-auto" />
        <img src={battlecamp} alt="Battle Camp" className="mx-auto lg:w-78" />
      </div>
      
      <div className="flex justify-center text-red-400 text-2xl font-bold">
        <h1 className="text-center">Derrote seus inimigos</h1>
      </div>
      <p className="text-center text-white">
        Derrote CHEFES ou PLAYERS para ganhar recompensas e avançar na
        sua jornada.<br/> Cada inimigo vencido traz novos desafios e oportunidades para
        fortalecer seu herói.
      </p>
    </div>
  );
}

export default BossScreen;