import { Component, OnInit } from '@angular/core';
import { Reciepe } from './reciepe.model';
import { ReciepeService } from './reciepe.service';

@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css'],
  providers: [ReciepeService]
})
export class ReciepesComponent implements OnInit {

  selectedReciepe: Reciepe;
  constructor(private reciepeService: ReciepeService) { }

  ngOnInit() {
    this.reciepeService.reciepeSelected.subscribe((reciepe: Reciepe) => {
      this.selectedReciepe = reciepe;
    });
  }

}
