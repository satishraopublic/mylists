import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylistdisplayComponent } from './mylistdisplay.component';

describe('MylistdisplayComponent', () => {
  let component: MylistdisplayComponent;
  let fixture: ComponentFixture<MylistdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylistdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
