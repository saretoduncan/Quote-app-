import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerCounter'
})
export class TimerCounterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
