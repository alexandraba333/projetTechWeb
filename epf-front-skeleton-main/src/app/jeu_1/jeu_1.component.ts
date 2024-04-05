import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Jeu_1 } from "models/jeu_1.model"
import { Reponse } from "models/reponse.model"
import { ActivatedRoute, Router } from "@angular/router"
import { Jeu_1Service } from "services/jeu_1.service"

@Component({
  selector: "epf-students",
  templateUrl: "./jeu_1.component.html",
  styleUrls: ['./jeu_1.component.scss']
})
export class Jeu_1Component {
  jeu_1$: Observable<Jeu_1> = this._route.data.pipe(map((data) => data["jeu_1"]))

  protected response:Reponse | undefined;
  public option : string="";
  public id : number=0;

  constructor(private _route: ActivatedRoute) {
  }

  onResponse(event:Reponse){
    this.response = event;
    console.log(event)
  }
}