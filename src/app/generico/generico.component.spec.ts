import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericoComponent } from './generico.component';

describe('GenericoComponent', () => {
  let component: GenericoComponent;
  let fixture: ComponentFixture<GenericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
