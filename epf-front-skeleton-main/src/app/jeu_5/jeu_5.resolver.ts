import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Jeu_5 } from "models/jeu_5.model"
import { Jeu_5Service } from "services/jeu_5.service"

@Injectable({
  providedIn: "root",
})
export class Jeu_5Resolver implements Resolve<Jeu_5> {
  constructor(private jeu_5Service: Jeu_5Service) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Jeu_5> {
    const id = parseInt(<string>route.paramMap.get("id"));
    return this.jeu_5Service.afficherQuestion(id);
  }
}
