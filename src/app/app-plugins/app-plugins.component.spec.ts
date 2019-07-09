import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPluginsComponent } from './app-plugins.component';

describe('AppPluginsComponent', () => {
  let component: AppPluginsComponent;
  let fixture: ComponentFixture<AppPluginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPluginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
