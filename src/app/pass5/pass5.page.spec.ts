import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pass5Page } from './pass5.page';

describe('Pass5Page', () => {
  let component: Pass5Page;
  let fixture: ComponentFixture<Pass5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pass5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pass5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
