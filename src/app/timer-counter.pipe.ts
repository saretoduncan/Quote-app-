import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timerCounter",
})
export class TimerCounterPipe implements PipeTransform {
  transform(value: any) {
    var lastSeen: string = "";
    let now: any = new Date().valueOf(); //current time

    let secondsPassed = (now - value.getTime()) / 1000; //time passed in second

    if (secondsPassed < 60) {
      lastSeen = `${Math.floor(secondsPassed)} seconds ago `;
    } else if (secondsPassed < 3600) {
      lastSeen = `${Math.floor(secondsPassed / 60)} minutes ago`;
    } else if (secondsPassed < 86400) {
      lastSeen = `${Math.floor(secondsPassed / 3600)} hours ago`;
    } else lastSeen = `${Math.floor(secondsPassed / 86400)} days ago`;

    return lastSeen;
  }
}
