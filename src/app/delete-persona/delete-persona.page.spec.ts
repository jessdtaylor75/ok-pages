import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletePersonaPage } from './delete-persona.page';

describe('DeletePersonaPage', () => {
  let component: DeletePersonaPage;
  let fixture: ComponentFixture<DeletePersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePersonaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
