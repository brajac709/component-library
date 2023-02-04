import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeststoryComponent } from './teststory.component';

describe('TeststoryComponent', () => {
  let component: TeststoryComponent;
  let fixture: ComponentFixture<TeststoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeststoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeststoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
