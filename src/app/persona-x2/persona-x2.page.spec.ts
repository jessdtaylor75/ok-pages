import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaX2Page } from './persona-x2.page';

describe('PersonaX2Page', () => {
  let component: PersonaX2Page;
  let fixture: ComponentFixture<PersonaX2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaX2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaX2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
