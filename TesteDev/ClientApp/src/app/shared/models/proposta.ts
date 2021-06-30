import { Veiculo } from './veiculo';

export class Proposta {
  id: string;
  dataProposta: string;
  veiculoId: string;
  valor: number;
  nomeCliente: string;
  veiculo: Veiculo;
}
