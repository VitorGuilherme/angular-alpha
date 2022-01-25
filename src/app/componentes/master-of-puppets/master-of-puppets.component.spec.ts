import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOfPuppetsComponent } from './master-of-puppets.component';

describe('MasterOfPuppetsComponent', () => {
  let component: MasterOfPuppetsComponent;
  let fixture: ComponentFixture<MasterOfPuppetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterOfPuppetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterOfPuppetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
