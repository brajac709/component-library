import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'app-test-slide-toggle',
  templateUrl: './test-slide-toggle.component.html',
  styleUrls: ['./test-slide-toggle.component.scss'],
  imports: [
    MatSlideToggleModule
  ]
})
export class TestSlideToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
