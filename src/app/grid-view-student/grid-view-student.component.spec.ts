import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewStudentComponent } from './grid-view-student.component';

describe('GridViewStudentComponent', () => {
  let component: GridViewStudentComponent;
  let fixture: ComponentFixture<GridViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridViewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
