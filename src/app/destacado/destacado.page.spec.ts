import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestacadoPage } from './destacado.page';

describe('DestacadoPage', () => {
  let component: DestacadoPage;
  let fixture: ComponentFixture<DestacadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DestacadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
