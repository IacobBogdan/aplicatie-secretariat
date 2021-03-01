import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewStudentComponent } from './list-view-student.component';

describe('ListViewStudentComponent', () => {
  let component: ListViewStudentComponent;
  let fixture: ComponentFixture<ListViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
