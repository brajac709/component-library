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

  @Input() columnWeights : number[] = [1,1,1]

  constructor() { }

  ngOnInit(): void {
  }

  headers() {
    return Object.keys(this.data[0]);
  }

  gridTemplateStyle() {
    const numHeaders = this.headers().length;

    if (this.columnWeights.length < numHeaders)
    {
      const newArr = Array(numHeaders - this.columnWeights.length).fill(1);
      this.columnWeights.splice(this.columnWeights.length,0, ...newArr);
    }

    const columnWeights = this.columnWeights.slice(0, numHeaders);

    const style = "".concat(...columnWeights.map(x => `${x}fr `));
    return style;
  }

}
