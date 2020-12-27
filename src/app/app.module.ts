import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AddAcaoComponent } from './shared/components/modal/add-acao/add-acao.component';
import { AlterarAcaoComponent } from './shared/components/modal/alterar-acao/alterar-acao.component';
import { DeletarAcaoComponent } from './shared/components/modal/deletar-acao/deletar-acao.component';
import { InserirAcaoComponent } from './shared/components/modal/inserir-acao/inserir-acao.component';
import { RemoverAcaoComponent } from './shared/components/modal/remover-acao/remover-acao.component';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';
import { TabelaAcaoComponent } from './shared/components/tabela-acao/tabela-acao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidemenuComponent,
    FooterComponent,
    HeaderComponent,
    AddAcaoComponent, 
    AlterarAcaoComponent,
    DeletarAcaoComponent,
    InserirAcaoComponent,
    RemoverAcaoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [
    AddAcaoComponent, 
    AlterarAcaoComponent,
    DeletarAcaoComponent,
    InserirAcaoComponent,
    RemoverAcaoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
