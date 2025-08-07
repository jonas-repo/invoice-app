import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItems } from './row-items';

describe('RowItems', () => {
  let component: RowItems;
  let fixture: ComponentFixture<RowItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
