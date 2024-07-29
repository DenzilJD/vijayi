import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, MatButtonModule, MatCardModule, NgIf, MatMenuModule, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // @ViewChild('table') table: MatTableDataSource<Element>;
  title = 'Product Order List';
  displayProducts: any = [];
  showOrders = false;
  products: any = [{ "id": 1, "product": "Orange Tahiti", "disabled": false },
  { "id": 2, "product": "verykool T7445", "disabled": false },
  { "id": 3, "product": "Celkon i9", "disabled": false },
  { "id": 4, "product": "Asus Zenfone Max (M1) ZB555KL", "disabled": false },
  { "id": 5, "product": "Plum Z708", "disabled": false },
  { "id": 6, "product": "alcatel HC 1000", "disabled": false },
  { "id": 7, "product": "Micromax X260", "disabled": false },
  { "id": 8, "product": "T-Mobile SpringBoard", "disabled": false },
  { "id": 9, "product": "LG K92 5G", "disabled": false },
  { "id": 10, "product": "vivo X9", "disabled": false },
  { "id": 11, "product": "Apple iPad 10.2 (2019)", "disabled": false },
  { "id": 12, "product": "Prestigio MultiPad 7.0 Ultra Duo", "disabled": false },
  { "id": 13, "product": "Micromax Bolt A35", "disabled": false },
  { "id": 14, "product": "LG CU720 Shine", "disabled": false },
  { "id": 15, "product": "Motorola V290", "disabled": false },
  { "id": 16, "product": "BLU Touch", "disabled": false },
  { "id": 17, "product": "Nokia 3600 slide", "disabled": false },
  { "id": 18, "product": "BLU Vivo Air LTE", "disabled": false },
  { "id": 19, "product": "Celkon C5055", "disabled": false },
  { "id": 20, "product": "Samsung T200", "disabled": false },
  { "id": 21, "product": "Sony Ericsson Z250", "disabled": false },
  { "id": 22, "product": "XOLO A700s", "disabled": false },
  { "id": 23, "product": "Nokia Lumia 530 Dual SIM", "disabled": false },
  { "id": 24, "product": "Celkon C567", "disabled": false },
  { "id": 25, "product": "Lenovo A6 Note", "disabled": false },
  { "id": 26, "product": "Lava A71", "disabled": false },
  { "id": 27, "product": "Gionee A1 Plus", "disabled": false },
  { "id": 28, "product": "LG Stylus 2 Plus", "disabled": false },
  { "id": 29, "product": "Huawei P40 lite", "disabled": false },
  { "id": 30, "product": "Samsung C3050 Stratus", "disabled": false },
  { "id": 31, "product": "Asus Fonepad", "disabled": false },
  { "id": 32, "product": "alcatel A3", "disabled": false },
  { "id": 33, "product": "Samsung A897 Mythic", "disabled": false },
  { "id": 34, "product": "Motorola Moto E7 Plus", "disabled": false },
  { "id": 35, "product": "Maxwest Orbit 6200T", "disabled": false },
  { "id": 36, "product": "Amoi M33", "disabled": false },
  { "id": 37, "product": "Motorola PEBL VU20", "disabled": false },
  { "id": 38, "product": "Sagem MY C4-2", "disabled": false },
  { "id": 39, "product": "Oppo R15x", "disabled": false },
  { "id": 40, "product": "Plum Bubby", "disabled": false },
  { "id": 41, "product": "Vodafone 1231", "disabled": false },
  { "id": 42, "product": "Nokia 2652", "disabled": false },
  { "id": 43, "product": "Honor X10 Max 5G", "disabled": false },
  { "id": 44, "product": "Panasonic Eluga I2 Activ", "disabled": false },
  { "id": 45, "product": "Samsung J210", "disabled": false },
  { "id": 46, "product": "Sagem my421x", "disabled": false },
  { "id": 47, "product": "Nokia 3230", "disabled": false },
  { "id": 48, "product": "Samsung I5800 Galaxy 3", "disabled": false },
  { "id": 49, "product": "Maxwest Nitro 5M", "disabled": false },
  { "id": 50, "product": "alcatel Smart Tab 7", "disabled": false },
  { "id": 51, "product": "Bird S758", "disabled": false },
  { "id": 52, "product": "Lava Iris 450 Colour", "disabled": false },
  { "id": 53, "product": "Celkon A86", "disabled": false },
  { "id": 54, "product": "Philips Xenium 9@9h", "disabled": false },
  { "id": 55, "product": "Realme GT 5G", "disabled": false },
  { "id": 56, "product": "ZTE Grand Memo II LTE", "disabled": false },
  { "id": 57, "product": "Plum Trigger Plus III", "disabled": false },
  { "id": 58, "product": "Oppo F1 Plus", "disabled": false },
  { "id": 59, "product": "Samsung Galaxy J7 Duo", "disabled": false },
  { "id": 60, "product": "Honor MagicWatch 2", "disabled": false },
  { "id": 61, "product": "Oppo A39", "disabled": false },
  { "id": 62, "product": "LG Tribute", "disabled": false },
  { "id": 63, "product": "Asus Zenpad 7.0 Z370CG", "disabled": false },
  { "id": 64, "product": "alcatel Pixi 4 (6) 3G", "disabled": false },
  { "id": 65, "product": "HP Slate7 VoiceTab Ultra", "disabled": false },
  { "id": 66, "product": "vivo Y71", "disabled": false },
  { "id": 67, "product": "Samsung I6220 Star TV", "disabled": false },
  { "id": 68, "product": "Nokia 6", "disabled": false },
  { "id": 69, "product": "Plum Wicked", "disabled": false },
  { "id": 70, "product": "ZTE F233", "disabled": false },
  { "id": 71, "product": "MWg Atom Life", "disabled": false },
  { "id": 72, "product": "Emporia Elegance Plus", "disabled": false },
  { "id": 73, "product": "Blackview A7", "disabled": false },
  { "id": 74, "product": "Nokia 2", "disabled": false },
  { "id": 75, "product": "Asus ROG Phone ZS600KL", "disabled": false },
  { "id": 76, "product": "Celkon A118", "disabled": false },
  { "id": 77, "product": "Nokia Lumia 2520", "disabled": false },
  { "id": 78, "product": "Samsung C3520", "disabled": false },
  { "id": 79, "product": "T-Mobile MDA Basic", "disabled": false },
  { "id": 80, "product": "Oppo A73 5G", "disabled": false },
  { "id": 81, "product": "Samsung S5230 Star", "disabled": false },
  { "id": 82, "product": "Micromax Infinity N12", "disabled": false },
  { "id": 83, "product": "vivo S5", "disabled": false },
  { "id": 84, "product": "Samsung M920 Transform", "disabled": false },
  { "id": 85, "product": "T-Mobile Move", "disabled": false },
  { "id": 86, "product": "alcatel OT-318D", "disabled": false },
  { "id": 87, "product": "Palm Treo 600", "disabled": false },
  { "id": 88, "product": "Celkon C205", "disabled": false },
  { "id": 89, "product": "Celkon C779", "disabled": false },
  { "id": 90, "product": "Benefon TWIG Discovery", "disabled": false },
  { "id": 91, "product": "ZTE Light Tab 300", "disabled": false },
  { "id": 92, "product": "iNQ Chat 3G", "disabled": false },
  { "id": 93, "product": "TCL MoveTime", "disabled": false },
  { "id": 94, "product": "LG Optimus L5 II E460", "disabled": false },
  { "id": 95, "product": "Allview V2 Viper Xe", "disabled": false },
  { "id": 96, "product": "Motorola Moto Z2 Force", "disabled": false },
  { "id": 97, "product": "alcatel 2010", "disabled": false },
  { "id": 98, "product": "Motorola MOTO XT702", "disabled": false },
  { "id": 99, "product": "Nokia N81 8GB", "disabled": false },
  { "id": 100, "product": "Sony Ericsson W8", "disabled": false }];
  quantity = 0;
  orders: any = [];
  user: any = { id: 123, orders: [] };
  values = [1, 2, 3, 4, 5];

  displayedColumns: any = ['id', 'name', 'quantity'];

  populateDisplay(a: any) {
    if (this.displayProducts.length === 8) {
      this._snackBar.open('Cannot add more than 8 items in a single order!', 'Close', { duration: 3000 });
      return;
    }
    this.displayProducts.push(a);
    let temp = this.products.filter((product: any) => product.id !== a.id);
    this.products = temp;
  }
  deleteProduct(a: any) {
    this.products.push(a);
    let temp = this.displayProducts.filter((product: any) => product.id !== a.id);
    this.displayProducts = temp;
  }
  constructor(private _snackBar: MatSnackBar) { }
  addToOrder(a: any, i: any) {
    if (!(a.quantity >= 1 && a.quantity <= 5))
      return;
    this.orders.push(a);
    this.user.orders.push(a);
    console.log(this.user);
    this.displayProducts[i].disabled = true;
    // this.table.renderRows();
  }
  toggle() {
    this.showOrders = !this.showOrders;
  }
  speak() {
    // Create a SpeechSynthesisUtterance
    let utterance;
    if (this.orders) {
      let s = "Your have placed an order for:";
      for (let i = 0; i < this.orders.length - 1; i++)
        s = s + ' ' + this.orders[i].quantity + ' ' + this.orders[i].product + 's, ';
      if (this.orders.length > 1)
        s = s + ' and ';
      s = s + this.orders[this.orders.length - 1].quantity + ' ' + this.orders[this.orders.length - 1].product + 's, ';
      utterance = new SpeechSynthesisUtterance(s);
    }
    else
      utterance = new SpeechSynthesisUtterance("There are no items added to your order.");
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice

    // Speak the text
    speechSynthesis.speak(utterance);
  }
}
