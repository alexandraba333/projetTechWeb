import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Jeu_3 } from "models/jeu_3.model"
import { Reponse } from "models/reponse.model"
import { ActivatedRoute, Router } from "@angular/router"
import { Jeu_3Service } from "services/jeu_3.service"

@Component({
  selector: "epf-students",
  templateUrl: "./jeu_3.component.html",
  styleUrls: ['./jeu_3.component.scss']
})
export class Jeu_3Component {
  jeu_3$: Observable<Jeu_3> = this._route.data.pipe(map((data) => data["jeu_3"]))

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

