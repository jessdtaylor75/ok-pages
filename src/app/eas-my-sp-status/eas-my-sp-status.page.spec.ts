import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasMySpStatusPage } from './eas-my-sp-status.page';

describe('EasMySpStatusPage', () => {
  let component: EasMySpStatusPage;
  let fixture: ComponentFixture<EasMySpStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasMySpStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasMySpStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
