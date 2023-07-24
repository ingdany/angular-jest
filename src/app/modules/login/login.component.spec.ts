import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

class MockAuthService  { 
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('LoginComponent', () => {

  let component: LoginComponent;
  let service: AuthService;
  let spy: any;
  // let service: AuthService;


  beforeEach(() => { 
    // service = new MockAuthService();
    service = new AuthService();    
    component = new LoginComponent(service);    
  });

  afterEach(() => { 
    // localStorage.removeItem('token');
    // service = null;
    // component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    // service.authenticated = false;
    spy = jest.spyOn(service, 'isAuthenticated').mockReturnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    // localStorage.setItem('token', '12345'); (3)
    // service.authenticated = true;
    spy = jest.spyOn(service, 'isAuthenticated').mockReturnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});
