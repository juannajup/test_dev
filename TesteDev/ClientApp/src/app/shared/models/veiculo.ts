import { Proposta } from "./proposta";

export class Veiculo {
  id: string;
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
  vendido: boolean;
  imagePath: string;
  proposta: Proposta[];
}
