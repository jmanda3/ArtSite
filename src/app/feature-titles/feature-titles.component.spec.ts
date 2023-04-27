import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeatureTitlesComponent } from './feature-titles.component';

describe('FeatureTitlesComponent', () => {
  let component: FeatureTitlesComponent;
  let fixture: ComponentFixture<FeatureTitlesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
