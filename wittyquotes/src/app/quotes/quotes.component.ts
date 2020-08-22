import { Component, OnInit } from '@angular/core';
import{Qoutes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


qoutes:Qoutes[]=[
  new Qoutes("Abraham lincoln", "Whatever you are be a good one", new Date(2012,12,1)),
  new Qoutes("Albert Einstein", "If you want to live a happy life,tie to a goal,not to people or objects",new Date(2013,11,5)),
  new Qoutes("Ben Carson", "Uninformed people can be easily manipulated",new Date(2012,12,2)),
  new Qoutes("Gitonga Miriam","Work hard Untill your Bank Account balance looks like your mobile phone number",new Date(2012,3,2)),
  new Qoutes("Nick Vijucic","If i fail ,i try again ,and again",new Date(2012,12,1)),
  new Qoutes("Oprah Winfrey","Think like a Queen .A Queen is not afraid to fail to failure is another steppingstone to greatness",new Date(2012,12,8)),
  
];
addNewQoute(qoute){
  qoute.completeDate = new Date(qoute.completeDate)
  this.qoutes.push(qoute)
}
displayDetails(index){
  this.qoutes[index].showQuotes = !this.qoutes[index].showQuotes;
}
deleteQoute(isComplete, index){
  if (isComplete) {
    let toDelete=confirm('Are you sure you want to delete'+ this.qoutes[index] .saying + '?')
  
  if(toDelete){
    this.qoutes.splice(index,1)
  }
  }



}

addUpVotes(i){
  this.qoutes[i].upVotes+=1;
}
addDownVotes(i){
  this.qoutes[i].downVotes+=1;
}

  constructor() { }

  ngOnInit(): void {
  }

}
