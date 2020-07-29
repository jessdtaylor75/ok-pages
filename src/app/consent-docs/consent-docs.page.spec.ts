import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsentDocsPage } from './consent-docs.page';

describe('ConsentDocsPage', () => {
  let component: ConsentDocsPage;
  let fixture: ComponentFixture<ConsentDocsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentDocsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsentDocsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
