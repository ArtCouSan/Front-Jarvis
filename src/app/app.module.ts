import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDECH from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCurrencyModule } from "ngx-currency";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AddAcaoComponent } from './shared/components/modal/acao/add-acao/add-acao.component';
import { AlterarAcaoComponent } from './shared/components/modal/acao/alterar-acao/alterar-acao.component';
import { DeletarAcaoComponent } from './shared/components/modal/acao/deletar-acao/deletar-acao.component';
import { InserirAcaoComponent } from './shared/components/modal/acao/inserir-acao/inserir-acao.component';
import { RemoverAcaoComponent } from './shared/components/modal/acao/remover-acao/remover-acao.component';
import { AddFixaComponent } from './shared/components/modal/fixa/add-fixa/add-fixa.component';
import { AlterarFixaComponent } from './shared/components/modal/fixa/alterar-fixa/alterar-fixa.component';
import { DeletarFixaComponent } from './shared/components/modal/fixa/deletar-fixa/deletar-fixa.component';
import { InserirFixaComponent } from './shared/components/modal/fixa/inserir-fixa/inserir-fixa.component';
import { RemoverFixaComponent } from './shared/components/modal/fixa/remover-fixa/remover-fixa.component';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';

registerLocaleData(localeDECH);

export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true
};
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
    RemoverAcaoComponent,
    AddFixaComponent, 
    AlterarFixaComponent,
    DeletarFixaComponent,
    InserirFixaComponent,
    RemoverFixaComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  entryComponents: [
    AddAcaoComponent, 
    AlterarAcaoComponent,
    DeletarAcaoComponent,
    InserirAcaoComponent,
    RemoverAcaoComponent,
    AddFixaComponent, 
    AlterarFixaComponent,
    DeletarFixaComponent,
    InserirFixaComponent,
    RemoverFixaComponent,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
