import { Component, OnInit, EventEmitter } from '@angular/core';
import { Reciepe } from '../reciepe.model';
import { ReciepeService } from '../reciepe.service';

@Component({
  selector: 'app-reciepes-list',
  templateUrl: './reciepes-list.component.html',
  styleUrls: ['./reciepes-list.component.css']
})
export class ReciepesListComponent implements OnInit {
  reciepes : Reciepe[];

  constructor(private reciepeService:ReciepeService) { }

  ngOnInit() {
    this.reciepes= this.reciepeService.getReciepes();
  }


}
