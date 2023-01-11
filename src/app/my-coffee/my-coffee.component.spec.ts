import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoffeeComponent } from './my-coffee.component';

describe('MyCoffeeComponent', () => {
  let component: MyCoffeeComponent;
  let fixture: ComponentFixture<MyCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoffeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
