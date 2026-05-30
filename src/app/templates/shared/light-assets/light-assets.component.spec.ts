import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightAssetsComponent } from './light-assets.component';

describe('LightAssetsComponent', () => {
  let component: LightAssetsComponent;
  let fixture: ComponentFixture<LightAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightAssetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LightAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
