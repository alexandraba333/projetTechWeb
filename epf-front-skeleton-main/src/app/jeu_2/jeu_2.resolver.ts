import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Jeu_2 } from "models/jeu_2.model"
import { Jeu_2Service } from "services/jeu_2.service"

@Injectable({
  providedIn: "root",
})
export class Jeu_2Resolver implements Resolve<Jeu_2> {
  constructor(private jeu_2Service: Jeu_2Service) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Jeu_2> {
    const id = parseInt(<string>route.paramMap.get("id"));
    return this.jeu_2Service.afficherQuestion(id);
  }
}
