import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsentDocument1Page } from './consent-document1.page';

describe('ConsentDocument1Page', () => {
  let component: ConsentDocument1Page;
  let fixture: ComponentFixture<ConsentDocument1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentDocument1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsentDocument1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
