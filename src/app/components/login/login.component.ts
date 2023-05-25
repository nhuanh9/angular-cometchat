import {Component} from '@angular/core';
import {CometChat} from "@cometchat-pro/chat";
import {COMETCHAT_CONSTANTS} from "../../../CONSTS";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userInput: String = "";
  superHero1 = "https://data-us.cometchat.io/assets/images/avatars/ironman.png";
  superHero2 =
    "https://data-us.cometchat.io/assets/images/avatars/captainamerica.png";
  superHero3 =
    "https://data-us.cometchat.io/assets/images/avatars/spiderman.png";
  superHero4 =
    "https://data-us.cometchat.io/assets/images/avatars/wolverine.png";
  superHero5 = "https://data-us.cometchat.io/assets/images/avatars/cyclops.png";

  constructor(private router: Router) {
  }

  onLoginError: boolean = false;
  errorMsg: string = "";

  onLogin(UID: any) {
    //@ts-ignore
    CometChat.login(UID, COMETCHAT_CONSTANTS.AUTH_KEY).then(
      (user) => {
        console.log("Login Successful:", {user});
        this.router.navigate(["/Home"]);
      },
      (error) => {
        //@ts-ignore
        console.log("Login failed with exception:", {error});
        this.onLoginError = true;
        this.errorMsg = error.message;
      }
    );
  }
}
