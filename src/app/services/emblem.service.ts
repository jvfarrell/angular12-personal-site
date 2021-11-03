import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmblemService {

  private ranks = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Grandmaster", "Challenger"];

  constructor() { }

  public getEmblemImg(tier: string) {
    let emblemString = "Emblem_"+ this.capitalizeFirstLetter(tier)+".png";
    return emblemString;
  }

  public getPositionImg(tier: string, position: string) {
    let positionString = "Position_"+ this.capitalizeFirstLetter(tier)+this.capitalizeFirstLetter(position)+".png";
    return positionString;
  }

  public capitalizeFirstLetter(toChange: string) {
    return toChange.charAt(0).toUpperCase() + toChange.slice(1).toLowerCase();
  }
}
