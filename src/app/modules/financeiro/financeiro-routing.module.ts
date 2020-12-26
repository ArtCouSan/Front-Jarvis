import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelicComponent } from './fixa/selic/selic.component';
import { TodosFixaComponent } from './fixa/todos-fixa/todos-fixa.component';
import { TodosInvestimentosComponent } from './todos-investimentos/todos-investimentos.component';
import { AcaoComponent } from './variavel/acao/acao.component';
import { FiisComponent } from './variavel/fiis/fiis.component';
import { TodosVariaveisComponent } from './variavel/todos-variaveis/todos-variaveis.component';

const routes: Routes = [
  { path: '',  component: TodosInvestimentosComponent},
  { path: 'todos',  component: TodosInvestimentosComponent},
  { path: 'fixa/selic',  component: SelicComponent},
  { path: 'fixa/todos',  component: TodosFixaComponent},
  { path: 'variavel/acao',  component: AcaoComponent},
  { path: 'variavel/fiis',  component: FiisComponent},
  { path: 'variavel/todos',  component: TodosVariaveisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }