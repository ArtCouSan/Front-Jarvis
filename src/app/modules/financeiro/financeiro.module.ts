import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { TodosInvestimentosComponent } from './todos-investimentos/todos-investimentos.component';
import { MaterialModule } from 'src/app/material.module';
import { AcaoComponent } from './variavel/acao/acao.component';
import { TodosVariaveisComponent } from './variavel/todos-variaveis/todos-variaveis.component';
import { FiisComponent } from './variavel/fiis/fiis.component';
import { SelicComponent } from './fixa/selic/selic.component';
import { TodosFixaComponent } from './fixa/todos-fixa/todos-fixa.component';


@NgModule({
  declarations: [
    TodosInvestimentosComponent,
    AcaoComponent,
    TodosVariaveisComponent,
    FiisComponent,
    SelicComponent,
    TodosFixaComponent
  ],
  imports: [
    MaterialModule,
    FinanceiroRoutingModule,
    CommonModule
  ]
})
export class FinanceiroModule { }
