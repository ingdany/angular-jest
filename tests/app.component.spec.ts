import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  test(`should have as title 'angular-jest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-jest');
  });

  // test('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const h1 = compiled.querySelector('h1');
  //   expect(h1?.textContent).toContain(component.title);
  //   // expect(compiled.querySelector('.content span')?.textContent).toContain('angular-jest app is running!');
  // });

  // test('Should match with Snapshot', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled).toMatchSnapshot();
  // });
});
