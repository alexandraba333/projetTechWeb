import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Jeu_3 } from "models/jeu_3.model"
import { Jeu_3Service } from "services/jeu_3.service"

@Injectable({
  providedIn: "root",
})
export class Jeu_3Resolver implements Resolve<Jeu_3> {
  constructor(private jeu_3Service: Jeu_3Service) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Jeu_3> {
    const id = parseInt(<string>route.paramMap.get("id"));
    return this.jeu_3Service.afficherQuestion(id);
  }
}
