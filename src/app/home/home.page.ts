import { Component } from '@angular/core'; 
 
@Component({ 
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
}) 
export class HomePage { 
  nama: string = 'Reva Nursyawalni'; 
  nim: string = '21416255201120'; 
  kelas: string = 'IF21A'; 
  pesan: string = 'Alhamdulillah'; 
  tujuan: string = ''; 
 
  constructor() {} 
 
  submitForm() { 
    // Lakukan pengiriman ke platform tujuan (WhatsApp, Telegram, atau Email) sesuai dengan nilai this.tujuan 
    if (this.tujuan === 'whatsapp') { 
      // Kirim melalui WhatsApp 
      const message = Halo, ini adalah pesan dari ${this.nama} (${this.nim}), kelas ${this.kelas}: ${this.pesan}; 
      const encodedMessage = encodeURIComponent(message); 
      window.open(`https://wa.me/?text=${encodedMessage}`, '_blank'); 
    } else if (this.tujuan === 'telegram') { 
      // Kirim melalui Telegram 
      const message = Halo, ini adalah pesan dari ${this.nama} (${this.nim}), kelas ${this.kelas}: ${this.pesan}; 
      const encodedMessage = encodeURIComponent(message); 
      window.open(`https://t.me/share/url?url=&text=${encodedMessage}`, '_blank'); 
    } else if (this.tujuan === 'email') { 
      // Kirim melalui Email 
      const subject = 'Pesan dari Form Submit'; 
      const body = Nama: ${this.nama}\nNIM: ${this.nim}\nKelas: ${this.kelas}\nPesan: ${this.pesan}; 
      const encodedSubject = encodeURIComponent(subject); 
      const encodedBody = encodeURIComponent(body); 
      window.open(`mailto:?subject=${encodedSubject}&body=${encodedBody}`, '_blank'); 
    } 
  } 
}