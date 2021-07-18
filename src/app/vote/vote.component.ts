import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit {
  @Output() deleted = new EventEmitter();
  delete(dl: boolean): void {
    this.deleted.emit(dl);
  }
  downVote: number = 0;
  upVote: number = 0;
  likes() {
    this.upVote++; // increase upvotes
  }
  dislikes() {
    this.downVote++; //increase downVotes
  }

  constructor() {}

  ngOnInit(): void {}
}
