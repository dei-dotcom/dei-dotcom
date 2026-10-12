import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonList, IonInput, IonLabel, IonSelectOption, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.page.html',
  styleUrls: ['./car-register.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption, IonList, IonInput, IonLabel, IonButton]
})
export class CarRegisterPage {
  private router = inject(Router);
    vehicletype: string = '';
    brand: string = '';
    model: string = '';
    year: string = '';
    odometer?: number;
    fuel: string = '';

    vehicleData: any;

    submit(){
      this.vehicleData = {
        vehicletype: this.vehicletype,
        brand: this.brand,
        model: this.model,
        year: this.year,
        odometer: Number(this.odometer),
        fuel: this.fuel
      }

      if(!this.vehicletype){
      return;
      }

      localStorage.setItem('vehicledata', JSON.stringify(this.vehicleData) );
      this.router.navigate(['/content-page'])
      console.log(this.vehicleData);
    }

  constructor() { }


}
