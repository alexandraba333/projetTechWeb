import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { Jeu_1Component } from "jeu_1/jeu_1.component"
import { Jeu_1Resolver } from "jeu_1/jeu_1.resolver"
import { BibliothequeComponent } from "./bibliotheque/bibliotheque.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "jeu_1/:id",
    component: Jeu_1Component,
    resolve: {
      jeu_1: Jeu_1Resolver,
    },
  },
  {
    path: "bibliotheque",
    component: BibliothequeComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
