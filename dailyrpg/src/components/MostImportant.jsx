import home from "../assets/home_screen.png";

function MostImportant() {
  return (
    <div className="flex justify-center flex-col gap-6 -mb-10 p-10">
      <div className="flex justify-center">
        <h1 className="text-amber-300 font-bold text-3xl text-center">
          Cumpra tarefas enquanto sobe seu nível!
        </h1>
      </div>
      <div>
        <img src={home} alt="Home" className="mx-auto" />
      </div>
      <div className="flex justify-center text-amber-300 text-2xl font-bold">
        <h1 className="text-center ">Tranforme sua vida em um RPG</h1>
      </div>
      <p className="text-center text-white ">
        Transforme sua produtividade em uma Aventura Épica de RPG!
        <br />
        cada contrato cumprido o torna mais forte
        <br /> equipa-se com armas e armaduras lendárias <br /> 
        ajude a derrotar dragões que
        aterrorizam o reino de Annelise.
      </p>
    </div>
  );
}

export default MostImportant;
