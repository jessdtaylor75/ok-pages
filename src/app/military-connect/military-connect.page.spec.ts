import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MilitaryConnectPage } from './military-connect.page';

describe('MilitaryConnectPage', () => {
  let component: MilitaryConnectPage;
  let fixture: ComponentFixture<MilitaryConnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryConnectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MilitaryConnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
