import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './components/page-main/page-main.component';
import { PageImprintComponent } from './components/page-imprint/page-imprint.component';
import { PagePrivacyComponent } from './components/page-privacy/page-privacy.component';

const routes: Routes = [
  { path: '', component: PageMainComponent },
  { path: 'imprint', component: PageImprintComponent },
  { path: 'privacy', component: PagePrivacyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
