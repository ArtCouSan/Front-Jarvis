import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { PieChartComponent } from 'src/app/shared/components/graficos/pie-chart/pie-chart.component';
import { TabelaAcaoComponent } from 'src/app/shared/components/tabela-acao/tabela-acao.component';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { SelicComponent } from './fixa/selic/selic.component';
import { TodosFixaComponent } from './fixa/todos-fixa/todos-fixa.component';
import { TodosInvestimentosComponent } from './todos-investimentos/todos-investimentos.component';
import { AcaoComponent } from './variavel/acao/acao.component';
import { FiisComponent } from './variavel/fiis/fiis.component';
import { TodosVariaveisComponent } from './variavel/todos-variaveis/todos-variaveis.component';
import { GraficoFiisComponent } from './variavel/fiis/grafico-fiis/grafico-fiis.component';

@NgModule({
  declarations: [
    TodosInvestimentosComponent,
    AcaoComponent,
    TodosVariaveisComponent,
    FiisComponent,
    SelicComponent,
    TodosFixaComponent,
    TabelaAcaoComponent,
    PieChartComponent,
    GraficoFiisComponent
  ],
  imports: [
    MaterialModule,
    FinanceiroRoutingModule,
    CommonModule
  ]
})
export class FinanceiroModule { }
