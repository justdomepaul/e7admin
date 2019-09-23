import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyEditComponent } from './reply-edit.component';

describe('ReplyEditComponent', () => {
  let component: ReplyEditComponent;
  let fixture: ComponentFixture<ReplyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
