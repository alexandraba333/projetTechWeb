import { Component, OnInit } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "epf-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []

  constructor() {
    this.links.push({ name: "Jeux", href: "students" })
    this.links.push({ name: "A propos", href: "majors" })
    this.links.push({ name: "Contact", href: "majors" })
  }
}
