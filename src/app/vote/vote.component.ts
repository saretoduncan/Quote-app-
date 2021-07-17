import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit {
  downVote: number = 0;
  upVote: number = 0;
  likes() {
    this.upVote++;
  }
  dislikes() {
    this.downVote++;
  }

  constructor() {}

  ngOnInit(): void {}
}
