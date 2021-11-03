import { Component, OnInit } from '@angular/core';
import { RiotService } from '../../service/riot.service'
import { CatFact } from 'src/app/model/catFact';

@Component({
  selector: 'app-catfact',
  templateUrl: './catfact.component.html',
  styleUrls: ['./catfact.component.css']
})
export class CatfactComponent implements OnInit {

  haveCatFact: boolean = false;
  catFact: CatFact | undefined;

  constructor(private riotService: RiotService) { }

  ngOnInit(): void {
  }

  getCatFact(): void {
    this.riotService.getCatFact().subscribe(catFact => this.catFact = catFact);
  }

}
