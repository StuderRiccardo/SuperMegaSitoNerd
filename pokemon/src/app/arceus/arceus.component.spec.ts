import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArceusComponent } from './arceus.component';

describe('ArceusComponent', () => {
  let component: ArceusComponent;
  let fixture: ComponentFixture<ArceusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArceusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArceusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
