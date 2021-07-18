import { Component, OnInit } from "@angular/core";

import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-quotes-gen",
  templateUrl: "./quotes-gen.component.html",
  styleUrls: ["./quotes-gen.component.css"],
})
export class QuotesGenComponent implements OnInit {
  quoteGenerator: ModelClass[] = [
    new ModelClass("duncan", "never give up", "sareto", new Date()),
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
