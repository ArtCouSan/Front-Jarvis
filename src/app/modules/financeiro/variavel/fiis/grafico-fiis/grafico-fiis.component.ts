import { Component, Input, OnInit } from '@angular/core';
import { GraficoQuantidadePapelModel } from 'src/app/core/model/grafico-quantidade-papel.model';
import { GraficoSetorModel } from 'src/app/core/model/grafico-setor.model';
import { GraficosFiisModel } from 'src/app/core/model/graficos-fiis.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-grafico-fiis',
  templateUrl: './grafico-fiis.component.html',
  styleUrls: ['./grafico-fiis.component.scss']
})
export class GraficoFiisComponent implements OnInit {

  panelOpenState = false;

  @Input() public listaGraficos: GraficosFiisModel;

  // Setor
  public listaDadosPorSetorLegenda: Array<string>;
  public listaDadosPorSetor: Array<number>;
  public listaDadosPorSetorCor: Array<string>;
  public listaSetores: Array<GraficoSetorModel>;

  // Qtn Papel
  public listaDadosPorQtnPapelLegenda: Array<string>;
  public listaDadosPorQtnPapel: Array<number>;
  public listaDadosPorQtnPapelCor: Array<string>;
  public listaQtnPapel: Array<GraficoQuantidadePapelModel>;

  constructor(private readonly rendaVariavelService: RendaVariavelService) { }

  ngOnInit() {

    this.listaSetores = this.listaGraficos.graficoSetor;
    this.listaDadosPorSetor = this.listaSetores.map(setor => setor.numeroSetores);
    this.listaDadosPorSetorLegenda = this.listaSetores.map(setor => setor.setor);
    this.listaDadosPorSetorCor = this.listaSetores.map(setor => setor.setorCorDeReferencia);

    this.listaQtnPapel = this.listaGraficos.graficoQtnPapel;
    this.listaDadosPorQtnPapel = this.listaQtnPapel.map(qtnPapel => qtnPapel.numeroQtnPapel);
    this.listaDadosPorQtnPapelLegenda = this.listaQtnPapel.map(qtnPapel => qtnPapel.ticketPapel);
    this.listaDadosPorQtnPapelCor = this.listaQtnPapel.map(qtnPapel => qtnPapel.qtnPapelCorDeReferencia);

  }

}
