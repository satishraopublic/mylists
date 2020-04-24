import { Component, OnInit } from '@angular/core';
import { MylistsApiService } from '../../services/mylists-api.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  mylists;
  constructor(private api: MylistsApiService) { }

  ngOnInit(): void {
      this.mylists = this.api.getLists();
  }

}
