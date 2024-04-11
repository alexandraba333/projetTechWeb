import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Jeu_4 } from "models/jeu_4.model"
import { Reponse } from "models/reponse.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class Jeu_4Service {
  constructor(private http: HttpClient) {
  }

  private jeu_4Url = "http://localhost:8080/jeu_4"


  afficherQuestion(id: number): Observable<Jeu_4> {
    return this.http.get<Jeu_4>(this.jeu_4Url + `/${id}`)
  }

  verifierReponse(reponse: string, id: number) : Observable<Reponse> {
    return this.http.get<Reponse>(this.jeu_4Url + `/${reponse}` + `/${id}`)
  }
}
