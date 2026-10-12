import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonTitle, IonToolbar } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-mileage',
  templateUrl: './update-mileage.page.html',
  styleUrls: ['./update-mileage.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonLabel,IonInput]
})
export class UpdateMileagePage implements OnInit {
private router = inject(Router);
  constructor() { }
  odometer?: Number;
  save(){
 const saved = JSON.parse(localStorage.getItem('vehicledata') || '{}');
 saved.odometer = Number(this.odometer);
 localStorage.setItem('vehicledata', JSON.stringify(saved));

    this.router.navigate(['content-page']);
  }

ngOnInit() {
  const saved = JSON.parse(localStorage.getItem('vehicledata') || '{}');
  this.odometer = saved.odometer;
}

}
