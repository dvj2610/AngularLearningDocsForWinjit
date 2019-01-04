import { Component, OnInit } from '@angular/core';
import { Reciepe } from '../reciepe.model';
import { ReciepeService } from '../reciepe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reciepes-detail',
  templateUrl: './reciepes-detail.component.html',
  styleUrls: ['./reciepes-detail.component.css']
})
export class ReciepesDetailComponent implements OnInit {

  reciepe:Reciepe;
  id: number;
  constructor(private reciepeService: ReciepeService,
              private route : ActivatedRoute) { 

              }

  ngOnInit() {
    //const id= this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params)=> {
        this.id =+params['id'];
        this.reciepe = this.reciepeService.getReciepe(this.id)
      }
    );
  }

}
