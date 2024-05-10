import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharacterModalComponent } from './new-character-modal.component';

describe('NewCharacterModalComponent', () => {
  let component: NewCharacterModalComponent;
  let fixture: ComponentFixture<NewCharacterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCharacterModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
