import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimboComponent } from './chimbo.component';

describe('ChimboComponent', () => {
  let component: ChimboComponent;
  let fixture: ComponentFixture<ChimboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
