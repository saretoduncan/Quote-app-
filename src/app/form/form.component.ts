import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<ModelClass>();
  newQuote = new ModelClass("", "");
  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  constructor() {}

  ngOnInit(): void {}
}
