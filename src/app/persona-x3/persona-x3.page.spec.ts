import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaX3Page } from './persona-x3.page';

describe('PersonaX3Page', () => {
  let component: PersonaX3Page;
  let fixture: ComponentFixture<PersonaX3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaX3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaX3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
