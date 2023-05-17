import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    searchText!: string;
    cardData: any;
  constructor(public http: HttpClient){
    this.searchCard();
    this.http.get("https://api.pokemontcg.io/v2/cards/").subscribe(baller => {
        
      //@ts-ignoreS
      this.carta = baller.data.image.small;
    })

    setInterval(() => {
      this.http.get(this.searchText).subscribe(baller => {
        //@ts-ignoreS
        this.poke = baller;
      })
    }, 1000)
    }
    searchCard() {
    if (this.searchText) {
      const apiUrl = `https://api.pokemontcg.io/v2/cards?q=name:${this.searchText}`;

      this.http.get(apiUrl).subscribe((data: any) => {
        this.cardData = data.data;
      });
    }
    }
  }