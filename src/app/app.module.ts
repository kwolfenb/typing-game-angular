import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { TypingComponent } from "./typing/typing.component";
import { PhrasesService } from "./phrases.service";


@NgModule({
  declarations: [AppComponent, TypingComponent],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [PhrasesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
