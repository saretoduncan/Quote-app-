import { Component, OnInit } from "@angular/core";

import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-quotes-gen",
  templateUrl: "./quotes-gen.component.html",
  styleUrls: ["./quotes-gen.component.css"],
})
export class QuotesGenComponent implements OnInit {
  quoteGenerator: ModelClass[] = [
    new ModelClass("duncan", "never give up", "sareto"),
  ];
  constructor() {}

  ngOnInit(): void {}
  newQ = new ModelClass("", "", "");
  addNewQuote(qoutee: any) {
    this.newQ.userName = qoutee.userName;
    this.newQ.quote = qoutee.qoute;
    this.newQ.author = qoutee.author;

    this.quoteGenerator.push(this.newQ);
  }
  del(index: number) {
    this.quoteGenerator.splice(index, 1);
  }
}
