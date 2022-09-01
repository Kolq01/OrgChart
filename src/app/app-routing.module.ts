import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericoComponent } from './generico/generico.component';
import { HomeComponent } from './home/home.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { OrgComponent } from './org/org.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'orgChart', component: OrgComponent}, 
  {path: 'orgGenerico', component: GenericoComponent},
  {path: 'nuevo',component: NewComponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
