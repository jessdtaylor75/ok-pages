import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPasscodePage } from './new-passcode.page';

describe('NewPasscodePage', () => {
  let component: NewPasscodePage;
  let fixture: ComponentFixture<NewPasscodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPasscodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPasscodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
