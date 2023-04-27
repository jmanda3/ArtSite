import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatureImagesComponent } from './feature-images.component';

describe('FeatureImagesComponent', () => {
  let component: FeatureImagesComponent;
  let fixture: ComponentFixture<FeatureImagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
