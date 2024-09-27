import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyIdDocScanPage } from './verify-id-doc-scan.page';

describe('VerifyIdDocScanPage', () => {
  let component: VerifyIdDocScanPage;
  let fixture: ComponentFixture<VerifyIdDocScanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyIdDocScanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyIdDocScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
