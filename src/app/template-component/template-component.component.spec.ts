import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponentComponent } from './template-component.component';

describe('TemplateComponentComponent', () => {
  let component: TemplateComponentComponent;
  let fixture: ComponentFixture<TemplateComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateComponentComponent]
    });
    fixture = TestBed.createComponent(TemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
