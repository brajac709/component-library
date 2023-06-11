import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.scss']
})
export class LogTableComponent implements OnInit {
  @Input() data : any[] = [
    {
      data1: "data 1", 
      data2: "data 2",
      data3: "data 3",
    },
    {
      data1: "data 1", 
      data2: "data 2",
      data3: "data 3",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  headers() {
    return Object.keys(this.data[0]);
  }

}
