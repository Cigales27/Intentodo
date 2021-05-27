import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent} from "../pages/principal/principal.component";
import { ContactoComponent} from "../pages/contacto/contacto.component";
import { InfoComponent} from "../pages/info/info.component";
import { ErrorComponent} from "../pages/error/error.component";
import { RouterModule, Routes} from "@angular/router";

const routes: Routes =[
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'principal', component: PrincipalComponent
  },
  {
    path: 'info', component: InfoComponent
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '', redirectTo: 'principal', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'error'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
