import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/service/admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private adminService: AdminService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.adminService.adminGetByAuthState().then((result) => {
        resolve(true);
      }).catch((err) => {
        this.adminService.redirectUrl = url;
        this.router.navigate(['/login']);
        reject(false);
      });
    });
  }
}
