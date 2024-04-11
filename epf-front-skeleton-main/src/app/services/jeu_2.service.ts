import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Jeu_2 } from "models/jeu_2.model"
import { Reponse } from "models/reponse.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class Jeu_2Service {
  constructor(private http: HttpClient) {
  }

  private jeu_2Url = "http://localhost:8080/jeu_2"


  afficherQuestion(id: number): Observable<Jeu_2> {
    return this.http.get<Jeu_2>(this.jeu_2Url + `/${id}`)
  }

  verifierReponse(reponse: string, id: number) : Observable<Reponse> {
    return this.http.get<Reponse>(this.jeu_2Url + `/${reponse}` + `/${id}`)
  }
}
