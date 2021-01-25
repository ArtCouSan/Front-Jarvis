import { Patrimonio } from "./patrimonio.model";
import { RendaVariavelModel } from "./renda-variavel.model";

export interface ConsolidadoRendaVariavelModel {
    patrimonioTotal: Array<Patrimonio>,
    renda: Array<RendaVariavelModel>
}