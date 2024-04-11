import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Jeu_1 } from "models/jeu_1.model"
import { Jeu_1Service } from "services/jeu_1.service"

@Injectable({
  providedIn: "root",
})
export class Jeu_1Resolver implements Resolve<Jeu_1> {
  constructor(private jeu_1Service: Jeu_1Service) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Jeu_1> {
    const id = parseInt(<string>route.paramMap.get("id"));
    return this.jeu_1Service.afficherQuestion(id);
  }

}
