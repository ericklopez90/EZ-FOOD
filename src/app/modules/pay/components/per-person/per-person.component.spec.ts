import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerPersonComponent } from './per-person.component';

describe('PerPersonComponent', () => {
  let component: PerPersonComponent;
  let fixture: ComponentFixture<PerPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
