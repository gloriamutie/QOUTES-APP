import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number{
    const today:Date = new Date(); //get current date and time
    const todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(todayWithNoTime - value); //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
   

    let dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    let dateCounter = dateDifferenceSeconds / secondsInDay;
    
    if (dateCounter >= 1 && todayWithNoTime > value) {
      return dateCounter;
    
    }else{
      return 0;
    }
  }

}
