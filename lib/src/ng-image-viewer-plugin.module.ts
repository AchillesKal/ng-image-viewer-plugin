import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageViewerComponent } from './ng-image-viewer/ng-image-viewer.component';



@NgModule({
  declarations: [
    NgImageViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgImageViewerComponent
  ]
})
export class NgImageViewerPluginModule { }
