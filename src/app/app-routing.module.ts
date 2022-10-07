import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent, UploadComponent } from './containers';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
