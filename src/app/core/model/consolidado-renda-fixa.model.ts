import { Patrimonio } from "./patrimonio.model";
import { RendaFixaModel } from "./renda-fixa.model";

export interface ConsolidadoRendaFixaModel {
    patrimonioTotal: Array<Patrimonio>,
    renda: Array<RendaFixaModel>
}