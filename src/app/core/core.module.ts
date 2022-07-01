import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { Error404Componente } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Componente
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Componente
      }
    ])
  ]
})

export class CoreModule {

}
