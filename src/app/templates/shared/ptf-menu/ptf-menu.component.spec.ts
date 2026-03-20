import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtfMenuComponent } from './ptf-menu.component';

describe('PtfMenuComponent', () => {
  let component: PtfMenuComponent;
  let fixture: ComponentFixture<PtfMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtfMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
