import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanEmailPage } from './scan-email.page';

describe('ScanEmailPage', () => {
  let component: ScanEmailPage;
  let fixture: ComponentFixture<ScanEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
