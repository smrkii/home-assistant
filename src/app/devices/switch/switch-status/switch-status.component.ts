import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-switch-status',
  templateUrl: './switch-status.component.html',
  styleUrls: ['./switch-status.component.scss']
})
export class SwitchStatusComponent implements OnInit {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
