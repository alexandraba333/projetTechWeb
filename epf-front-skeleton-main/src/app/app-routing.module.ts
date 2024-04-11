import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { Jeu_1Component } from "jeu_1/jeu_1.component"
import { Jeu_1Resolver } from "jeu_1/jeu_1.resolver"
import { Jeu_2Component } from "jeu_2/jeu_2.component"
import { Jeu_2Resolver } from "jeu_2/jeu_2.resolver"
import { Jeu_3Component } from "jeu_3/jeu_3.component"
import { Jeu_3Resolver } from "jeu_3/jeu_3.resolver"
import { Jeu_4Component } from "jeu_4/jeu_4.component"
import { Jeu_4Resolver } from "jeu_4/jeu_4.resolver"
import { Jeu_5Component } from "jeu_5/jeu_5.component"
import { Jeu_5Resolver } from "jeu_5/jeu_5.resolver"
import { BibliothequeComponent } from "./bibliotheque/bibliotheque.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "jeu_1/:id",
    component: Jeu_1Component
  },
  {
    path: "jeu_2/:id",
    component: Jeu_2Component,
    resolve: {
      jeu_2: Jeu_2Resolver,
    },
  },
  {
    path: "jeu_3/:id",
    component: Jeu_3Component,
    resolve: {
      jeu_3: Jeu_3Resolver,
    },
  },
  {
    path: "jeu_4/:id",
    component: Jeu_4Component,
    resolve: {
      jeu_4: Jeu_4Resolver,
    },
  },
  {
    path: "jeu_5/:id",
    component: Jeu_5Component,
    resolve: {
      jeu_5: Jeu_5Resolver,
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
