import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetPageComponent } from './add-pet-page.component';

describe('AddPetPageComponent', () => {
  let component: AddPetPageComponent;
  let fixture: ComponentFixture<AddPetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
