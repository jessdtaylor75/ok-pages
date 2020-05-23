import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEmployerPage } from './edit-employer.page';

describe('EditEmployerPage', () => {
  let component: EditEmployerPage;
  let fixture: ComponentFixture<EditEmployerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEmployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
