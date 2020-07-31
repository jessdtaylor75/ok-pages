import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppEmailClientFindPage } from './app-email-client-find.page';

describe('AppEmailClientFindPage', () => {
  let component: AppEmailClientFindPage;
  let fixture: ComponentFixture<AppEmailClientFindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmailClientFindPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppEmailClientFindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
