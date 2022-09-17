import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsalesComponent } from './tvsales.component';

describe('TvsalesComponent', () => {
  let component: TvsalesComponent;
  let fixture: ComponentFixture<TvsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
