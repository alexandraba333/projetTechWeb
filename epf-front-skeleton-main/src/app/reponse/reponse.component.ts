import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Jeu_1Service } from "../services/jeu_1.service"
import { Reponse } from "../models/reponse.model"

@Component({
  selector: 'epf-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent {

  @Input("nb_jeu")
  public nb_Jeu: number=1;

  private _optionChoisi: string="";

  @Input("index")
  public index: number=1;

  @Output("response")
  public response: EventEmitter<Reponse> = new EventEmitter<Reponse>();


  constructor(private jeu_1Service: Jeu_1Service) { }


  get optionChoisi(): string {
    return this._optionChoisi
  }

  @Input()
  set optionChoisi(value: string) {
    this._optionChoisi = value
    this.jeu_1Service.verifierReponse(this._optionChoisi, this.index).subscribe(
      response => this.response.emit(response)
    );
  }
}
