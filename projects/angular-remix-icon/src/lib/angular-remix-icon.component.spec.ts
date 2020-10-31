import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRemixIconComponent } from './angular-remix-icon.component';

describe('AngularRemixIconComponent', () => {
  let component: AngularRemixIconComponent;
  let fixture: ComponentFixture<AngularRemixIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRemixIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRemixIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
