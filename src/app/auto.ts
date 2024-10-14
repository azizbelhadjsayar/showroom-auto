export interface Auto {
    model: string;
    price: number;
    power: number;
    photo: string;
    availability: number;
    logo: string;
}
  
  // Interface pour représenter les voitures regroupées par marque
export interface AutoByBrand {
    [brand: string]: Auto[]; // La clé est la marque et la valeur est un tableau de voitures (modèles)
}