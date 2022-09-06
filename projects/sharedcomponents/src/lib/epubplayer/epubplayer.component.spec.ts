import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpubplayerComponent } from './epubplayer.component';

describe('EpubplayerComponent', () => {
  let component: EpubplayerComponent;
  let fixture: ComponentFixture<EpubplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpubplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpubplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
