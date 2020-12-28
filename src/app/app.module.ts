import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDECH from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCurrencyModule } from "ngx-currency";
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
    RemoverAcaoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  entryComponents: [
    AddAcaoComponent, 
    AlterarAcaoComponent,
    DeletarAcaoComponent,
    InserirAcaoComponent,
    RemoverAcaoComponent
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
