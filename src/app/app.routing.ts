import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TypingComponent } from "./typing/typing.component";
import { AboutComponent } from "./about/about.component";
import { WelcomeComponent } from "./welcome/welcome.component";



const appRoutes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "typing",
    component: TypingComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
