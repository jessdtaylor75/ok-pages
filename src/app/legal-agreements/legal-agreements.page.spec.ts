import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegalAgreementsPage } from './legal-agreements.page';

describe('LegalAgreementsPage', () => {
  let component: LegalAgreementsPage;
  let fixture: ComponentFixture<LegalAgreementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalAgreementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegalAgreementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
