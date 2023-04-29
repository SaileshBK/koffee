import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotKoffeeComponent } from './hot-koffee.component';

describe('hotkoffeeComponent', () => {
  let component: HotKoffeeComponent;
  let fixture: ComponentFixture<HotKoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotKoffeeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HotKoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
