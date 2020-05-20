import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIdPage } from './add-id.page';

describe('AddIdPage', () => {
  let component: AddIdPage;
  let fixture: ComponentFixture<AddIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
