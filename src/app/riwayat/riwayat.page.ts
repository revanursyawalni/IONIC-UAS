import { Component } from '@angular/core';

@Component({
  selector: 'app-riwayat',
  templateUrl: 'riwayat.page.html',
  styleUrls: ['riwayat.page.scss'],
})
export class RiwayatPage {
  riwayat!: any[];

  constructor() {}

  ionViewDidEnter() {
    // Ambil data riwayat dari local storage dan tampilkan
    const riwayat = localStorage.getItem('riwayat');
    if (riwayat) {
      this.riwayat = JSON.parse(riwayat);
    }
  }
}
