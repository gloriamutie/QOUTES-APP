import { Component, OnInit } from '@angular/core';
import { Quotes } from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


quotes:Quotes []=[

  new Quotes("Abraham lincoln", "Whatever you are be a good one", new Date(2020,7,22)),
  new Quotes("Albert Einstein", "If you want to live a happy life,tie to a goal,not to people or objects",new Date(2020,7,22)),
  new Quotes("Ben Carson", "Uninformed people can be easily manipulated",new Date(2020,7,22)),
  new Quotes("Gitonga Miriam","Work hard Untill your Bank Account balance looks like your mobile phone number",new Date(2020,7,9)),
  new Quotes("Nick Vijucic","If i fail ,i try again ,and again",new Date(2020,8,10)),
  new Quotes("Oprah Winfrey","Think like a Queen .A Queen is not afraid to fail to failure is another steppingstone to greatness",new Date(2020,1,8)),
  
];
addNewQuote(quote){
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

displayDetails(index){
  this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
}
deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete=confirm('Are you sure you want to delete'+ this.quotes[index] .saying + '?')
  
  if(toDelete){
    this.quotes.splice(index,1)
  }
  }



}

addUpVotes(i){
  this.quotes[i].upVotes+=1;
}
addDownVotes(i){
  this.quotes[i].downVotes+=1;
}
  

  constructor() { }

  ngOnInit() {
  }

}
