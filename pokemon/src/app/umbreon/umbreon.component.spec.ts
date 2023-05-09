import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmbreonComponent } from './umbreon.component';

describe('UmbreonComponent', () => {
  let component: UmbreonComponent;
  let fixture: ComponentFixture<UmbreonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmbreonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmbreonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
