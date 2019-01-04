import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService, private http: HttpClient) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
  
  getActiveAccounts() {
		// return this.http.post(this.baseUrl + 'DebtorPortal/GetActiveAccounts', Id)
		// 	.map(res => res.json())
    //   .catch(this.handleErrorObservable);
    let token ='Bearer EgVKs8SeX1lFJckxYeDhyY4RplJ87uza-8k6HZQKuk_Nt35f6ARWMMo9VpyQbMZOsY0JjG43JfUK9LDIRCz9mzpprYFp83hBE5UO69MBZxxVImo20VUBV0J92WFLotklx_AXMmELUsu6o-dmmC8_l0DdVWJ6ZhXIimBTOxZDN4ji96BmZSxu_81JK7IVXkZtWEaVr1h4j3QbeW8YsxfRk0faimEa7D8Ot4cGRvfRqsC_dL57aTIN4lLybnj62rzLeh5OakLaoZ6qWuiVcn4iO-moSragtpzs4gh7q9AdtZXbQDk9WP9Bfc_SDRQLsB0ZliwR_Bldj508clYX3SdSuG_vGfUnItqbNpWsk4aEQk0K50_5qA5D403aOLvzZ-2xidHpAYyMr_Js3fYPSZkr-zXp9q71-VMF1IBpXW0xQdM9pci-Vg67daXhyEd9i4Oq7xbiE2XdAlvAaixNnxWqzWQpe-BvsWwHdmOSfmKnu8dBK3WG9OR1mipsJGhAisDx';
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    //.set('Cache-Control', 'no-cache');
    myheader.set('Authorization',token);
    debugger;
      let body = JSON.stringify({szIDNumber: '6803260130084', AppName: 'DEBTOR_PORTAL'});
        //this.http.post('http://localhost:50300/api/DebtorPortal/GetActiveAccounts', body, { headers: myheader })
        this.http.post('http://192.168.41.76:8083/api/DebtorPortal/GetActiveAccounts', body, { headers: myheader })		
      .subscribe(
        data => {
          debugger;
          alert(JSON.stringify(data));          
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );

      // this.http.post('http://192.168.41.76:8083/api/DebtorPortal/GetActiveAccounts', body, { headers: myheader })		
      //   .subscribe(res => console.log(res.toString()));
	}
  onGetToken() {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    let body1 = new HttpParams();
    body1 = body1.set('grant_type', 'password');
    body1 = body1.set('responseType', 'application/json');
    body1 = body1.set('username', 'bhaveshn@tcrrecoveries.co.za');
    body1 = body1.set('password', 'SampleString@2');
    
    this.http
      // .post('http://localhost:50300/Token', body1, {
        .post('http://192.168.41.76:8083/Token', body1, {
        headers: myheader
      })
      .subscribe(
        data => {
          debugger;
          alert(JSON.stringify(data));          
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
  }
}
