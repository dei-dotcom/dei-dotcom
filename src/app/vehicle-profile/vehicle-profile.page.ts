import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-vehicle-profile',
  templateUrl: './vehicle-profile.page.html',
  styleUrls: ['./vehicle-profile.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,RouterLink,IonButton,IonButtons,IonIcon]
})
export class VehicleProfilePage {
  carType: string = ''
  brand: string = '';
  model: string = '';
  year: string = '';


  constructor() { 
    const data = localStorage.getItem('vehicledata');
    if(data){
      try{
        const car = JSON.parse(data);
        this.carType = car.vehicletype;
        this.brand = car.brand;
        this.model = car.model;
        this.year = car.year;
      }
      catch(e){
        console.log('no car has been record')
      }
    }
  }


}
