import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { TypingComponent } from "./typing/typing.component";
import { PhrasesService } from "./phrases.service";
import { DisplayService } from "./display.service";

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DisplayusersComponent } from './displayusers/displayusers.component';
import { AboutComponent } from './about/about.component';
import { AboutService } from "./about.service";
import { WelcomeComponent } from './welcome/welcome.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [AppComponent, TypingComponent, DisplayusersComponent, AboutComponent, WelcomeComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    routing,    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [PhrasesService,DisplayService,AboutService],
  bootstrap: [AppComponent]
})
export class AppModule {}
