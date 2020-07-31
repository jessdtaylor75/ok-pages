import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppEmailClientGetPage } from './app-email-client-get.page';

describe('AppEmailClientGetPage', () => {
  let component: AppEmailClientGetPage;
  let fixture: ComponentFixture<AppEmailClientGetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmailClientGetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppEmailClientGetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
