import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-mylistdisplay',
  templateUrl: './mylistdisplay.component.html',
  styleUrls: ['./mylistdisplay.component.css']
})
export class MylistdisplayComponent implements OnInit {

  @Input('myListName') name: string;
  @Input('itemCount') itemCount: number;
  @Input('description') description: string;
  @Input('id') id:number;
  constructor() { }

  ngOnInit(): void {
  }

}
