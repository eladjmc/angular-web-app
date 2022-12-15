import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/interfaces/list-item';

@Component({
  selector: 'app-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  displayedColumns=['id','description','actions']
  @Input() list: ListItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
