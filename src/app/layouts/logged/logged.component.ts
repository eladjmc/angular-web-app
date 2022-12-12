import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  @Input() color:string = 'orange';
  constructor() { }

  ngOnInit(): void {
  }

}
