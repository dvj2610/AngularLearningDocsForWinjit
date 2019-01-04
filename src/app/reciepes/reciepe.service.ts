import { Reciepe } from "./reciepe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/Shopping-list.service";

@Injectable()
export class ReciepeService {
  reciepeSelected = new EventEmitter<Reciepe>();

  private reciepes: Reciepe[] = [
    new Reciepe(
      'Test1', 'This is test1', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=700&q=85',
      [new Ingredient('Burger', 2),
      new Ingredient('Choclate 2', 3)]),
    new Reciepe(
      'Test2', 'This is test2', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=700&q=85',
      
      [
        new Ingredient('Veggies', 2),
        new Ingredient('Veggies 2', 3)
      ])
  ];

  constructor(private slService : ShoppingListService){

  }
  getReciepes() {
    return this.reciepes.slice();
  }
  getReciepe(index : number) {
    return this.reciepes.slice()[index];
  }
  addIngredeientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}