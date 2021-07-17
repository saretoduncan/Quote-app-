import { Component, OnInit } from "@angular/core";
import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-quotes-gen",
  templateUrl: "./quotes-gen.component.html",
  styleUrls: ["./quotes-gen.component.css"],
})
export class QuotesGenComponent implements OnInit {
  quoteGenerator: ModelClass[] = [new ModelClass("duncan", "never give up")];
  constructor() {}

  ngOnInit(): void {}
  addNewQuote(qoutee: any) {
    this.quoteGenerator.push(qoutee);
  }
}
