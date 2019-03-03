import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowComponentComponent } from './tv-show-component.component';

describe('TvShowComponentComponent', () => {
  let component: TvShowComponentComponent;
  let fixture: ComponentFixture<TvShowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
