import { Patrimonio } from "./patrimonio.model";
import { RendaModel } from "./renda.model";

export interface ConsolidadoRendasModel {
    patrimonioTotal: Array<Patrimonio>,
    renda: Array<RendaModel>
}