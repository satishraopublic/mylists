import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MylistsApiService } from '../../services/mylists-api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-list-item-edit',
  templateUrl: './list-item-edit.component.html',
  styleUrls: ['./list-item-edit.component.css']
})
export class ListItemEditComponent implements OnInit {
  id: any;
  mylist: any;

  constructor(private location: Location, private route: ActivatedRoute, private api: MylistsApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.mylist = this.api.getListDetails(this.id);
  }

  cancelOperation(){
    this.location.back();
  }

}
