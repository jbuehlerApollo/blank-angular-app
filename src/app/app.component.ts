import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: any[] = [
    { header: 'A', field: 'A', width: '20%' },
    { header: 'B', field: 'B', width: '20%' },
    { header: 'C', field: 'C', width: '20%' },
    { header: 'D', field: 'D', width: '20%' },
    { header: 'E', field: 'E', width: '20%' }
  ];
  value: any[] = [
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' },
    { A: 'test', B: 'test', C: 'test', D: 'test', E: 'test' }
  ];
}
