import { Component, OnInit } from "@angular/core";

import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-quotes-gen",
  templateUrl: "./quotes-gen.component.html",
  styleUrls: ["./quotes-gen.component.css"],
})
export class QuotesGenComponent implements OnInit {
  quoteGenerator: ModelClass[] = [
    new ModelClass(
      "duncan",
      "never give up",
      "sareto",
      new Date(2021, 6, 6, 12, 49, 10)
    ),
    new ModelClass(
      "duncan",
      "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
      "Walt Disney",
      new Date(2021, 6, 7, 12, 49, 10)
    ),
    new ModelClass(
      "Duncan",
      "Don’t Let Yesterday Take Up Too Much Of Today.",
      "Ja Loka",
      new Date(2021, 6, 8, 12, 49, 10)
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  showForms: boolean = false;
  formToggle() {
    this.showForms = true;
  }
  clos(isFalse: boolean) {
    this.showForms = isFalse;
  }

  addNewQuote(qoutee: any) {
    this.quoteGenerator.push(
      new ModelClass(qoutee.userName, qoutee.qoute, qoutee.author, new Date())
    );
    this.showForms = false;
  }

  del(isDelete: boolean, index: number) {
    if (isDelete) {
      let confirmDelete = confirm("Are you sure you want to delete this quote");
      if (confirmDelete) this.quoteGenerator.splice(index, 1);
    }
  }
  showDetails(index: number) {
    this.quoteGenerator[index].showDetails = !this.quoteGenerator[index]
      .showDetails;
  }
}
