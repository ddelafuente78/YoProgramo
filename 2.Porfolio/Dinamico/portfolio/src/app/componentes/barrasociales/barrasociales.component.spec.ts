import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasocialesComponent } from './barrasociales.component';

describe('BarrasocialesComponent', () => {
  let component: BarrasocialesComponent;
  let fixture: ComponentFixture<BarrasocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
