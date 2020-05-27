import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanTestPage } from './scan-test.page';

describe('ScanTestPage', () => {
  let component: ScanTestPage;
  let fixture: ComponentFixture<ScanTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
