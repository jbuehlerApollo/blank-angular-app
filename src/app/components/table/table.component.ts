import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public columns: any[];
  @Input() public value: any[];

  public tableOptions = { selectionMode: 'single', scrollHeight: '191px' };

  public constructor() { }
}
