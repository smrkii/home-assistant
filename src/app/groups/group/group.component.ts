import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../core/api/groups/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input('groupProps') groupProps: Group

  constructor() { }

  ngOnInit(): void {


  }

  onSwitchClick(event: Event){
    console.log(this.groupProps);

  }



}
