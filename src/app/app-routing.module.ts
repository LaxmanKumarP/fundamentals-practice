import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataInTemplateUrlComponent } from './components-templates/display-data-in-template-url/display-data-in-template-url.component';
import { DisplayDataInTemplateComponent } from './components-templates/display-data-in-template/display-data-in-template.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path:'components-templates/display-data-in-template', component:DisplayDataInTemplateComponent},
  {path:'components-templates/display-data-in-template-url', component: DisplayDataInTemplateUrlComponent},
  {path:'', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
