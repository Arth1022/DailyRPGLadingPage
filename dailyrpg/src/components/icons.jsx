import book from "../assets/book.png";
import sword from "../assets/sword.png";

function icons() {
  return (
    <div className="flex justify-center items-center  gap-12">
      <div className="text-center">
        <div className="flex justify-center">
          <img src={book} alt="book icon" />
        </div>

        <h1 className="text-amber-300 font-bold">Missões diárias</h1>
        <p className="text-white text-sm">
          Cumpra missões
          <br />
          para ganhar recompensas
          <br />
        </p>
      </div>

      <div className="text-center ">
        <div className="flex justify-center">
          <img src={sword} alt="sword icon" />
        </div>

        <h1 className="text-amber-300 font-bold">Derrote o chefão</h1>
        <p className="text-white text-sm">
          Prepare seu herói
          <br />
          para enfrentar Dragões
          <br />
        </p>
      </div>
    </div>
  );
}

export default icons;
