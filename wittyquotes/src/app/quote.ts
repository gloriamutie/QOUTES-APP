export class Quotes {
   showQuotes: boolean;
    public upVotes:number;
    public downVotes:number;
    

    constructor(public name:string,public saying:string,public complete:Date)
       { 
      this.upVotes=0;
      this.downVotes=0;
      
       }

      
      
}
