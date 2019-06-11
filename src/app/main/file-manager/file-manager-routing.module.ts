import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileManagerHomeComponent } from './file-manager-home/file-manager-home.component';

const routes: Routes = [{
  path: '',
  component: FileManagerHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
