import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditIdPage } from './edit-id.page';

describe('EditIdPage', () => {
  let component: EditIdPage;
  let fixture: ComponentFixture<EditIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
