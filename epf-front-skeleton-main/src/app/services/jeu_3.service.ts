import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Jeu_3 } from "models/jeu_3.model"
import { Reponse } from "models/reponse.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class Jeu_3Service {
  constructor(private http: HttpClient) {
  }

  private jeu_3Url = "http://localhost:8080/jeu_3"


  afficherQuestion(id: number): Observable<Jeu_3> {
    return this.http.get<Jeu_3>(this.jeu_3Url + `/${id}`)
  }

  verifierReponse(reponse: string, id: number) : Observable<Reponse> {
    return this.http.get<Reponse>(this.jeu_3Url + `/${reponse}` + `/${id}`)
  }
}
