import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auto, AutoByBrand } from '../auto';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NzInputModule, NzButtonModule, NzSelectModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})

export class SearchBarComponent {
  @Input() autos: AutoByBrand = {}; // Utiliser AutoByBrand
  selectedAutos: AutoByBrand = {};
  selectedValue: string | null = null;
  selectedAutoDetails: Auto | null = null; // Détails complets du modèle sélectionné

  searchAutoList(searchString: string) {
    this.selectedValue="";
    this.selectedAutos = {};
    this.selectedAutoDetails = null;
    for (const brand in this.autos) {
      if (this.autos.hasOwnProperty(brand) && brand.toLowerCase().includes(searchString.toLowerCase())) {
        this.selectedAutos[brand] = this.autos[brand]; // Ajouter les modèles de la marque filtrée
      }
    }
  }

  onModelSelect(selectedModel: string) {
    // Chercher le modèle sélectionné dans selectedAutos
    for (const brand in this.selectedAutos) {
      if (this.selectedAutos.hasOwnProperty(brand)) {
        const foundModel = this.selectedAutos[brand].find(auto => auto.model === selectedModel);
        if (foundModel) {
          this.selectedAutoDetails = foundModel; // Stocker les détails du modèle sélectionné
          break;
        }
      }
    }
  }
}
