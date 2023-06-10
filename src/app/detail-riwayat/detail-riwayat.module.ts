import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRiwayatPageRoutingModule } from './detail-riwayat-routing.module';

import { DetailRiwayatPage } from './detail-riwayat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRiwayatPageRoutingModule
  ],
  declarations: [DetailRiwayatPage]
})
export class DetailRiwayatPageModule {}
