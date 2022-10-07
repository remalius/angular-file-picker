import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModalComponent } from './browser-modal.component';

describe('BrowserModalComponent', () => {
  let component: BrowserModalComponent;
  let fixture: ComponentFixture<BrowserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowserModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
