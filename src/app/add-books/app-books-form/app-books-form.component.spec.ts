import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBooksFormComponent } from './app-books-form.component';

describe('AppBooksFormComponent', () => {
  let component: AppBooksFormComponent;
  let fixture: ComponentFixture<AppBooksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBooksFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBooksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
