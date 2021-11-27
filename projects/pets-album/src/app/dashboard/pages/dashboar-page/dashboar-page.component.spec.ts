import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarPageComponent } from './dashboar-page.component';

describe('DashboarPageComponent', () => {
  let component: DashboarPageComponent;
  let fixture: ComponentFixture<DashboarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
