export class Quotes {
    showQuotes: boolean;
    upVotes:number;
    downVotes:number;
    constructor(public name:string,
       public saying:string,
       public complete:Date)
       {
      this.upVotes=0;
      this.downVotes=0;
    }
}
