import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaPanelComponent } from './insta-panel.component';

describe('InstaPanelComponent', () => {
  let component: InstaPanelComponent;
  let fixture: ComponentFixture<InstaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
