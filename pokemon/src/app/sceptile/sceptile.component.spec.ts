import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceptileComponent } from './sceptile.component';

describe('SceptileComponent', () => {
  let component: SceptileComponent;
  let fixture: ComponentFixture<SceptileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceptileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceptileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
