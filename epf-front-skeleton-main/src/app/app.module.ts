import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MajorsComponent } from "majors/majors.component"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './footer/footer.component'
import { MatChipsModule } from "@angular/material/chips"
import { HttpClientModule } from "@angular/common/http"
import { Jeu_1Component } from "./jeu_1/jeu_1.component"
import { ReponseComponent } from "./reponse/reponse.component"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    StudentDetailsComponent,
    MajorsComponent,
    MajorStudentsComponent,
    FooterComponent,
    Jeu_1Component,
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
