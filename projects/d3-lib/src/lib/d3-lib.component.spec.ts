import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3LibComponent } from './d3-lib.component';

describe('D3LibComponent', () => {
  let component: D3LibComponent;
  let fixture: ComponentFixture<D3LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3LibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
