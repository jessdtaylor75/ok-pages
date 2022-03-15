import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaX1Page } from './persona-x1.page';

describe('PersonaX1Page', () => {
  let component: PersonaX1Page;
  let fixture: ComponentFixture<PersonaX1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaX1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaX1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
