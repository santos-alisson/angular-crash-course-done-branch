import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async-component/async-component.component';
import { CardModule } from './shared/components/card/card.module';
import { ToUppercasePipe } from './shared/pipes/to-uppercase.pipe';
import { SimpleComponent } from './simple-component/simple-component.component';
import { TemplateComponent } from './template-component/template-component.component';
import { FormSampleModule } from './form-sample/form-sample.module';
import { PokemonComponent } from './shared/components/pokemon/pokemon.component';
import { PokemonBattleComponent } from './pokemon-battle/pokemon-battle.component';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ToUppercasePipe,
    CapitalizePipe,
    AsyncComponent,
    TemplateComponent,
    PokemonComponent,
    PokemonBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    FormSampleModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
