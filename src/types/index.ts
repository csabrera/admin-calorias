export type Categoria = {
  id: number;
  name: string;
};

export type Actividad = {
  categoria: number;
  name: string;
  calorias: number;
};
