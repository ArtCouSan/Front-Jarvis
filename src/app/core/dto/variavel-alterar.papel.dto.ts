export interface VariavelAlterarPapelDTO {
    id: number,
    ticket: string,
    nome: string,
    valorAtual: number,
    valorJusto: number,
    qntPapeis: number,
    porcentagemLucro: number,
    margemDeQtnDesejado: number,
    papelCorDeReferencia: string
}