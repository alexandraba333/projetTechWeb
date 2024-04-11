import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './footer/footer.component'
import { MatChipsModule } from "@angular/material/chips"
import { Jeu_1Component } from "./jeu_1/jeu_1.component"
import { Jeu_2Component } from "./jeu_2/jeu_2.component"
import { Jeu_3Component } from "./jeu_3/jeu_3.component"
import { Jeu_4Component } from "./jeu_4/jeu_4.component"
import { Jeu_5Component } from "./jeu_5/jeu_5.component"
import { ReponseComponent } from "./reponse/reponse.component"
import { BibliothequeComponent } from "./bibliotheque/bibliotheque.component"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BibliothequeComponent,
    FooterComponent,
    Jeu_1Component,
    Jeu_2Component,
    Jeu_3Component,
    Jeu_4Component,
    Jeu_5Component,
    ReponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
