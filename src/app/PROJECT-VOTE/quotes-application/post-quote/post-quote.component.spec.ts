import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQuoteComponent } from './post-quote.component';

describe('PostQuoteComponent', () => {
  let component: PostQuoteComponent;
  let fixture: ComponentFixture<PostQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
