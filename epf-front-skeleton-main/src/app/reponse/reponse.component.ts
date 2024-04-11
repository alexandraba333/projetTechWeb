import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Jeu_1Service } from "../services/jeu_1.service"
import { Jeu_2Service } from "../services/jeu_2.service"
import { Jeu_3Service } from "../services/jeu_3.service"
import { Jeu_4Service } from "../services/jeu_4.service"
import { Jeu_5Service } from "../services/jeu_5.service"
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


  constructor(private jeu_1Service: Jeu_1Service, private jeu_2Service: Jeu_2Service, private jeu_3Service: Jeu_3Service, private jeu_4Service: Jeu_4Service, private jeu_5Service: Jeu_5Service) { }


  get optionChoisi(): string {
    return this._optionChoisi
  }

  @Input()
  set optionChoisi(value: string) {
    this._optionChoisi = value
    switch (this.nb_Jeu)
    {
      case 1:
        this.jeu_1Service.verifierReponse(this._optionChoisi, this.index).subscribe(
          response => this.response.emit(response)
        );
        break;
      case 2:
        this.jeu_2Service.verifierReponse(this._optionChoisi, this.index).subscribe(
          response => this.response.emit(response)
        );
        break;
      case 3:
        this.jeu_3Service.verifierReponse(this._optionChoisi, this.index).subscribe(
          response => this.response.emit(response)
        );
        break;
      case 4:
        this.jeu_4Service.verifierReponse(this._optionChoisi, this.index).subscribe(
          response => this.response.emit(response)
        );
        break;
      case 5:
        this.jeu_5Service.verifierReponse(this._optionChoisi, this.index).subscribe(
          response => this.response.emit(response)
        );
        break;
    }

  }
}
