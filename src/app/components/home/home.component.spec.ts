import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', () => {
    let pElements = el.queryAll(By.css('p'));
    expect(pElements[0].nativeElement.textContent).toBe('home works!');
    let buttonElement = el.queryAll(By.css('.btn'));
    expect(buttonElement[0].nativeElement.disabled).toBeTrue();
    let imgElement = el.queryAll(By.css('img'));
    expect(imgElement[0].nativeElement.src).toBe('https://imgsrc.com/');
    let titleElement = el.queryAll(By.css('div'));
    component.title = 'Welcome to mock home component';
    fixture.detectChanges();
    expect(titleElement[0].nativeElement.textContent).toBe(
      'Welcome to mock home component',
    );
  });
});
