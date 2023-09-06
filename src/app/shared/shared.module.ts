import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividersComponent } from './dividers/dividers.component';

@NgModule({
  declarations: [DividersComponent],
  imports: [CommonModule],
  exports: [DividersComponent],
})
export class SharedModule {}
