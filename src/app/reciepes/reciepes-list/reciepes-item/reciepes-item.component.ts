import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reciepe } from '../../reciepe.model';

@Component({
  selector: 'app-reciepes-item',
  templateUrl: './reciepes-item.component.html',
  styleUrls: ['./reciepes-item.component.css']
})
export class ReciepesItemComponent implements OnInit {

  @Input() reciepe: Reciepe;


  ngOnInit() {

  }

 
}
