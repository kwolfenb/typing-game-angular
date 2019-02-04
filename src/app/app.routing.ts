import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TypingComponent } from "./typing/typing.component";

const appRoutes: Routes = [
  {
    path: "",
    component: TypingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
