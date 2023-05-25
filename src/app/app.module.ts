import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {
    CometChatAvatar
} from "../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/Shared/CometChat-avatar/cometchat-avatar.module";
import {
  CometChatUI
} from "../cometchat-pro-angular-ui-kit/CometChatWorkspace/src/components/CometChatUI/CometChat-Ui/cometchat-ui.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CometChatAvatar,
    CometChatUI
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
