import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
      {
    return true;
  }

// Use the segments to build the full route
// when using canLoad
canLoad(route: Route, segments: UrlSegment[]): boolean {
  return this.checkLoggedIn(segments.join('/'));
}

checkLoggedIn(url: string): boolean {
  if (this.authService.isLoggedIn) {
    return true;
  }

  // Retain the attempted URL for redirection
  this.authService.redirectUrl = url;
  this.router.navigate(['/login']);
  return false;
}

}
