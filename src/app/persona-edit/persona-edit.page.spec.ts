import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaEditPage } from './persona-edit.page';

describe('PersonaEditPage', () => {
  let component: PersonaEditPage;
  let fixture: ComponentFixture<PersonaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
