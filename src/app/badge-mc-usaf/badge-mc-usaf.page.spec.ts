import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeMcUsafPage } from './badge-mc-usaf.page';

describe('BadgeMcUsafPage', () => {
  let component: BadgeMcUsafPage;
  let fixture: ComponentFixture<BadgeMcUsafPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeMcUsafPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeMcUsafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
