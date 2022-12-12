import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-logged',
  templateUrl: './not-logged.component.html',
  styleUrls: ['./not-logged.component.scss']
})
export class NotLoggedComponent implements OnInit {
  @Input() color:string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

}
