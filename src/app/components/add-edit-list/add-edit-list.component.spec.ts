import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditListComponent } from './add-edit-list.component';

describe('AddEditListComponent', () => {
  let component: AddEditListComponent;
  let fixture: ComponentFixture<AddEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
