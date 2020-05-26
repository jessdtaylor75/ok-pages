import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jumio1Page } from './jumio1.page';

describe('Jumio1Page', () => {
  let component: Jumio1Page;
  let fixture: ComponentFixture<Jumio1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumio1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jumio1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
