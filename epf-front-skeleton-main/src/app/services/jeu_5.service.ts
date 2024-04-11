import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Jeu_5 } from "models/jeu_5.model"
import { Reponse } from "models/reponse.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class Jeu_5Service {
  constructor(private http: HttpClient) {
  }

  private jeu_5Url = "http://localhost:8080/jeu_5"


  afficherQuestion(id: number): Observable<Jeu_5> {
    return this.http.get<Jeu_5>(this.jeu_5Url + `/${id}`)
  }

  verifierReponse(reponse: string, id: number) : Observable<Reponse> {
    return this.http.get<Reponse>(this.jeu_5Url + `/${reponse}` + `/${id}`)
  }
}
