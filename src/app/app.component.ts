import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Auto, AutoByBrand } from './auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'showroom-auto';
  autoList: AutoByBrand = {
    "AUDI": [
      { model: "A3 BERLINE", price: 149000, power: 8, photo: "photos/AUDI/A3 BERLINE.webp", availability: 11, logo:"photos/AUDI/logo.png"},
      { model: "A3 SPORTBACK", price: 145000, power: 8, photo: "photos/AUDI/A3 SPORTBACK.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "A4", price: 198000, power: 8, photo: "photos/AUDI/A4.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "A6", price: 295000, power: 11, photo: "photos/AUDI/A6.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "Q2", price: 159000, power: 8, photo: "photos/AUDI/Q2.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "Q3", price: 205000, power: 9, photo: "photos/AUDI/Q3.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "Q3 SPORTBACK", price: 235000, power: 9, photo: "photos/AUDI/Q3 SPORTBACK.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "Q5 SPORTBACK", price: 350000, power: 16, photo: "photos/AUDI/Q5 SPORTBACK.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "Q7", price: 445000, power: 16, photo: "photos/AUDI/Q7.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "Q8", price: 510000, power: 23, photo: "photos/AUDI/Q8.webp", availability: 11, logo:"photos/AUDI/logo.png" },
      { model: "E-TRON GT", price: 360000, power: 37, photo: "photos/AUDI/E-TRON GT.webp", availability: 11, logo:"photos/AUDI/logo.png" }
    ],
    "BMW": [
      { model: "SERIE 1", price: 150900, power: 6, photo: "photos/BMW/SERIE 1.webp", availability: 3, logo:"photos/BMW/logo.png"},
      { model: "SERIE 2 GRAN COUPE", price: 169900, power: 8, photo: "photos/BMW/SERIE 2 GRAN COUPE.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "SERIE 3", price: 207900, power: 9, photo: "photos/BMW/SERIE 3.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "SERIE 4 GRAN COUPE", price: 281500, power: 10, photo: "photos/BMW/SERIE 4 GRAN COUPE.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "SERIE 4 COUPE", price: 329900, power: 10, photo: "photos/BMW/SERIE 4 COUPE.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "SERIE 5", price: 269900, power: 11, photo: "photos/BMW/SERIE 5.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "SERIE 7", price: 782900, power: 26, photo: "photos/BMW/SERIE 7.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "X1", price: 188900, power: 9, photo: "photos/BMW/X1.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "X2", price: 199900, power: 8, photo: "photos/BMW/X2.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "X4", price: 434900, power: 11, photo: "photos/BMW/X4.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "I4", price: 236900, power: 22, photo: "photos/BMW/I4.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "IX1", price: 216900, power: 8, photo: "photos/BMW/IX1.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "IX3", price: 284900, power: 8, photo: "photos/BMW/IX3.webp", availability: 6, logo:"photos/BMW/logo.png" },
      { model: "IX", price: 431900, power: 11, photo: "photos/BMW/IX.webp", availability: 6, logo:"photos/BMW/logo.png" }
    ],
    "JAGUAR": [
      { model: "JAGUAR E-PACE", price: 350000, power: 12, photo: "photos/JAGUAR/E-PACE.webp", availability: 11, logo:"photos/JAGUAR/logo.png" },
      { model: "JAGUAR F-PACE", price: 399000, power: 16, photo: "photos/JAGUAR/F-PACE.webp", availability: 11, logo:"photos/JAGUAR/logo.png" }
    ],
    "LAND ROVER": [
      { model: "RANGE ROVER EVOQUE", price: 340000, power: 9, photo: "photos/LAND ROVER/RANGE ROVER EVOQUE.webp", availability: 4, logo:"photos/LAND ROVER/logo.png"},
      { model: "DEFENDER 90", price: 398000, power: 21, photo: "photos/LAND ROVER/DEFENDER 90.webp", availability: 4, logo:"photos/LAND ROVER/logo.png" },
      { model: "DEFENDER 110", price: 364200, power: 29, photo: "photos/LAND ROVER/DEFENDER 110.webp", availability: 4, logo:"photos/LAND ROVER/logo.png" },
      { model: "RANGE ROVER VEALR", price: 396500, power: 15, photo: "photos/LAND ROVER/RANGE ROVER VELAR.webp", availability: 4, logo:"photos/LAND ROVER/logo.png" },
      { model: "RANGE ROVER SPORT", price: 607200, power: 29, photo: "photos/LAND ROVER/RANGE ROVER SPORT.webp", availability: 4, logo:"photos/LAND ROVER/logo.png" },
      { model: "RANGE ROVER", price: 702500, power: 24, photo: "photos/LAND ROVER/RANGE ROVER.webp", availability: 4, logo:"photos/LAND ROVER/logo.png"}
    ],
    "MERCEDES-BENZ": [
      { model: "CLASSE A", price: 159000, power: 9, photo: "photos/MERCEDES-BENZ/Benz classe A.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png"},
      { model: "CLASSE A BERLINE", price: 160000, power: 9, photo: "photos/MERCEDES-BENZ/Benz classe A Berline.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "CLE COUPE", price: 292000, power: 12, photo: "photos/MERCEDES-BENZ/Benz CLE COUPE.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "CLASSE E", price: 259000, power: 12, photo: "photos/MERCEDES-BENZ/Benz CLASSE E.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "CLASSE S", price: 583000, power: 27, photo: "photos/MERCEDES-BENZ/Benz CLASSE S.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "GLA", price: 203000, power: 9, photo: "photos/MERCEDES-BENZ/Benz GLA.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "GLB", price: 226000, power: 9, photo: "photos/MERCEDES-BENZ/Benz GLB.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "GLC", price: 284000, power: 12, photo: "photos/MERCEDES-BENZ/Benz GLC.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "GLC COUPE", price: 339000, power: 12, photo: "photos/MERCEDES-BENZ/Benz GLC COUPE.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "GLE", price: 468000, power: 17, photo: "photos/MERCEDES-BENZ/Benz GLE.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "GLE COUPE", price: 488000, power: 16, photo: "photos/MERCEDES-BENZ/Benz GLE COUPE.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" },
      { model: "CLASSE V", price: 468000, power: 12, photo: "photos/MERCEDES-BENZ/Benz CLASSE V.webp", availability: 9, logo:"photos/MERCEDES-BENZ/logo.png" }
    ],
    "VOLKSWAGEN": [
      { model: "VIRTUS", price: 65980, power: 6, photo: "photos/VOLKSWAGEN/VIRTUS.webp", availability: 3, logo:"photos/VOLKSWAGEN/logo.png"},
      { model: "T-CROSS", price: 75980, power: 6, photo: "photos/VOLKSWAGEN/T-CROSS.webp", availability: 6, logo:"photos/VOLKSWAGEN/logo.png" },
      { model: "POLO", price: 82980, power: 5, photo: "photos/VOLKSWAGEN/POLO.webp", availability: 6, logo:"photos/VOLKSWAGEN/logo.png" },
      { model: "GOLF 8", price: 120980, power: 8, photo: "photos/VOLKSWAGEN/GOLF 8.webp", availability: 6, logo:"photos/VOLKSWAGEN/logo.png" },
      { model: "TIGUAN", price: 154980, power: 8, photo: "photos/VOLKSWAGEN/TIGUAN.webp", availability: 6, logo:"photos/VOLKSWAGEN/logo.png" }
    ]
  };
}
