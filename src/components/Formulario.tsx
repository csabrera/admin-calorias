import { useState, ChangeEvent, FormEvent } from "react";
import { categorias } from "../data/categorias";

import type { Actividad } from "../types";

const Formulario = () => {
  const [actividad, setActividad] = useState<Actividad>({
    categoria: 1,
    name: "",
    calorias: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["categoria", "calorias"].includes(e.target.id);
    setActividad({
      ...actividad,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calorias } = actividad;
    return name.trim() !== "" && calorias > 0;
  };

  const hableSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hableSubmit");
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={hableSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="categoria" className="font-bold">
          Categoría:{" "}
        </label>
        <select
          id="categoria"
          className="border border-slate-300 p-2 rounded-lg w-full"
          value={actividad.categoria}
          onChange={handleChange}
        >
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:{" "}
        </label>
        <input
          id="name"
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicileta"
          value={actividad.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calorias" className="font-bold">
          Calorías:{" "}
        </label>
        <input
          id="calorias"
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorías, Ejm. 300 o 200"
          value={actividad.calorias}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        // value="Guardar Comida o Guargar Ejercicio"
        value={
          actividad.categoria === 1 ? "Guardar Comida" : "Guargar Ejercicio"
        }
        disabled={!isValidActivity()}
      />
    </form>
  );
};

export default Formulario;
