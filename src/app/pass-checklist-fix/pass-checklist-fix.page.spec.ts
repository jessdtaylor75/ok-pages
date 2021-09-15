import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassChecklistFixPage } from './pass-checklist-fix.page';

describe('PassChecklistFixPage', () => {
  let component: PassChecklistFixPage;
  let fixture: ComponentFixture<PassChecklistFixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassChecklistFixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassChecklistFixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
