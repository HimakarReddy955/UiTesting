import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'UiTesting'`, () => {
    expect(component.title).toEqual('UiTesting');
  });

  // it('should render a button with text subscribe', () => {
  //   const btnElement = el.queryAll(By.css('.subscribe'));
  //   component.btnText = 'Subscribe';
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   console.log(btnElement[0].nativeElement.textContent);
  //   expect(btnElement[0].nativeElement.textContent.trim()).toBe('Subscribe');
  //   expect(btnElement[0].nativeElement.disabled).toBeFalse();
  // });

  // it('should render a button with text subscribed and button should be disabled', () => {
  //   const btnElement = el.queryAll(By.css('.subscribe'));
  //   component.btnText = 'Subscribe';
  //   component.isSubscribed = false;
  //   btnElement[0].nativeElement.click();
  //   fixture.detectChanges();
  //   console.log(btnElement[0].nativeElement.textContent);
  //   expect(btnElement[0].nativeElement.textContent.trim()).toBe('Subscribed');
  //   expect(btnElement[0].nativeElement.disabled).toBeTrue();
  // });

  it('should render a button with text subscribe', () => {
    const btnElement = el.queryAll(By.css('.subscribe'));
    component.isSubscribed = false;
    fixture.detectChanges();
    expect(btnElement[0].nativeElement.textContent.trim()).toBe('Subscribe');
    expect(btnElement[0].nativeElement.disabled).toBeFalse();
  });

  it('should render a button with text subscribed and button should be disabled', () => {
    let btnElement = el.queryAll(By.css('.subscribe'));
    component.btnText = 'Subscribe';
    component.isSubscribed = false;
    btnElement[0].nativeElement.click();
    fixture.detectChanges();
    btnElement = el.queryAll(By.css('.subscribe'));
    console.log(btnElement[0].nativeElement.textContent);
    expect(btnElement[0].nativeElement.textContent.trim()).toBe('Subscribed');
    expect(btnElement[0].nativeElement.disabled).toBeTrue();
  });
});
