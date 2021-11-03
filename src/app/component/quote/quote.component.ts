import { Component, Input, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/service/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote?: string;
  constructor(
    private quoteService: QuoteService
    ) {  }

  ngOnInit(): void {
    this.getQuote()
  }

  getQuote(): void {
    this.quote = this.quoteService.getQuote();
  }

}
