import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{Quotes} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quotes("","",new Date());

  @Output() AddQuote = new EventEmitter<Quotes>();
  submitQuote(){
    this.AddQuote.emit(this.newQuote);
   this.newQuote = new Quotes("","",new Date());
      }


  constructor() { }

  ngOnInit(): void {
  }

}
