import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { CharactersComponent } from './characters/characters.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FilmsService } from './services/films.service';
import { VehiculesService } from './services/vehicules.service';
import { CharactersService } from './services/characters.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmsComponent,
    CharactersComponent,
    VehiclesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    FilmsService,
    VehiculesService,
    CharactersService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
