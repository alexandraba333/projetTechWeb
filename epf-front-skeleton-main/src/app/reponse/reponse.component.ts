import { Component, Input, OnInit, Output } from "@angular/core"
import { Jeu_1Service } from "../services/jeu_1.service"
import { Reponse } from "../models/reponse.model"
import { Observable } from "rxjs"
import { Subject } from "rxjs"

@Component({
  selector: 'epf-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {

  @Input("nb_jeu")
  public nb_Jeu: number=1;

  @Input("optionChoisi")
  public optionChoisi: string="";

  @Input("index")
  public index: number=1;

  @Output("response")
  public response!: Observable<Reponse>;


  constructor(private jeu_1Service: Jeu_1Service) { }

  ngOnInit(): void {
    this.response = this.jeu_1Service.verifierReponse(this.optionChoisi, this.index)
  }

}
