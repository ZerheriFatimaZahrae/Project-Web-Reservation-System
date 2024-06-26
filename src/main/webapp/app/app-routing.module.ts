import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../java/home/home.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";
import {UtilisateursComponent} from "./utilisateurs/utilisateurs.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {SeancesComponent} from "./seances/seances.component";
import {JuryComponent} from "./jury/jury.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {EditJuryComponent} from "./edit-jury/edit-jury.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminTemplateComponent, canActivate : [AuthGuard],
    children: [
      {path: "home", component: HomeComponent},
      {path: "profile", component: ProfileComponent},
      {path: "utilisateurs", component: UtilisateursComponent},
      {path: "reservations", component: ReservationsComponent},
      {path: "seances", component: SeancesComponent},
      {path: "jury", component: JuryComponent},
      {path : "editProduct/:id", component: EditUserComponent},
      {path : "newUser", component: NewUserComponent},
      {path : "editUser/:id", component: EditUserComponent},
      {path : "editJury/:id", component: EditJuryComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
