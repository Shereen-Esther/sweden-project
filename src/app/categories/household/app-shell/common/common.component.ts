import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-field',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  @Input() t: any;
  constructor() {}

  ngOnInit(): void {}
}
