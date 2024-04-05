import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Jeu_1 } from "models/jeu_1.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class Jeu_1Service {
  constructor(private http: HttpClient) {
  }

  private jeu_1Url = "http://localhost:8080/jeu_1"


  afficherQuestion(id: number): Observable<Jeu_1> {
    return this.http.get<Jeu_1>(this.jeu_1Url + `/${id}`)
  }
}
