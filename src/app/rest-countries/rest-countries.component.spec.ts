import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCountriesComponent } from './rest-countries.component';

describe('RestCountriesComponent', () => {
  let component: RestCountriesComponent;
  let fixture: ComponentFixture<RestCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
