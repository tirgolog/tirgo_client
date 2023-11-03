import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
  }
  async goToRegistration(){
    await this.router.navigate(['registration'],{replaceUrl: true});
  }
  async goToAuthorization(){
    await this.router.navigate(['auth'],{replaceUrl: true});
  }
}
