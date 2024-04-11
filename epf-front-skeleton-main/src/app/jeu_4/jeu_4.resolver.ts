import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Jeu_4 } from "models/jeu_4.model"
import { Jeu_4Service } from "services/jeu_4.service"

@Injectable({
  providedIn: "root",
})
export class Jeu_4Resolver implements Resolve<Jeu_4> {
  constructor(private jeu_4Service: Jeu_4Service) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Jeu_4> {
    const id = parseInt(<string>route.paramMap.get("id"));
    return this.jeu_4Service.afficherQuestion(id);
  }
}
