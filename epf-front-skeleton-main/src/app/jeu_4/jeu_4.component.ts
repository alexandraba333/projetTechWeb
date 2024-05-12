import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Jeu_4 } from "models/jeu_4.model"
import { Reponse } from "models/reponse.model"
import { ActivatedRoute, Router } from "@angular/router"
import { Jeu_4Service } from "services/jeu_4.service"

@Component({
  selector: "epf-students",
  templateUrl: "./jeu_4.component.html",
  styleUrls: ['./jeu_4.component.scss']
})
export class Jeu_4Component {
  jeu_4$: Observable<Jeu_4> = this._route.data.pipe(map((data) => data["jeu_4"]))

  protected response: Reponse | undefined;
  public option: string = "";
  public id: number = 0;
  public valeurBouton: string = "Suivant";
  protected responseBack: Reponse | undefined;
  public choisie: string = "";
  public valider: string = "";
  public validationEffectuee : boolean = false;


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

  Validation(): void {
    let bonne_rep=0;
    this.validationEffectuee = true;
    if (this.responseBack?.check == true)
    {
      this.valider="Bravo ! C'est la bonne réponse.";
      bonne_rep++;
    }
    else
      this.valider = "Ce n'est pas la bonne réponse.";
  }
}
