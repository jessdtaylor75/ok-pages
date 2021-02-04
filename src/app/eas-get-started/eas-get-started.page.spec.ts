import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasGetStartedPage } from './eas-get-started.page';

describe('EasGetStartedPage', () => {
  let component: EasGetStartedPage;
  let fixture: ComponentFixture<EasGetStartedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasGetStartedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasGetStartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
