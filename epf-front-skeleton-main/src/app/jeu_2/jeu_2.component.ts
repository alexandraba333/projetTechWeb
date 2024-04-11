import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Jeu_2 } from "models/jeu_2.model"
import { Reponse } from "models/reponse.model"
import { ActivatedRoute, Router } from "@angular/router"
import { Jeu_2Service } from "services/jeu_2.service"

@Component({
  selector: "epf-students",
  templateUrl: "./jeu_2.component.html",
  styleUrls: ['./jeu_2.component.scss']
})
export class Jeu_2Component {
  jeu_2$: Observable<Jeu_2> = this._route.data.pipe(map((data) => data["jeu_2"]))

  protected response: Reponse | undefined;
  public option: string = "";
  public id: number = 0;
  public valeurBouton: string = "Suivant";
  protected responseBack: Reponse | undefined;
  public choisie: string = "";


  constructor(private _route: ActivatedRoute) {
    let questionNumber: number = +this._route.snapshot.url.join('/').slice(6, 7);
    if (questionNumber != 5)
      this.valeurBouton = "Suivant";
    else
      this.valeurBouton = "Fini";
  }

  onResponse(event: Reponse) {
    this.responseBack = event;
  }

  onOptionSelected(option: string) {
    this.choisie = option;
  }

  redirectToNextPage() {
    const currentUrl = this._route.snapshot.url.join('/');
    const nextPageUrl = this.getNextPageUrl(currentUrl);
    window.location.href = nextPageUrl;
  }


  getNextPageUrl(currentUrl: string): string {
    let questionNumber: number = +currentUrl.slice(6, 7);
    if (questionNumber != 5)
      questionNumber++;
    else
      return "";
    return currentUrl.slice(0, 6) + questionNumber.toString();

  }
}
