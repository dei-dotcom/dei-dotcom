import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonSelect,
  IonLabel,
  IonSelectOption,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.page.html',
  styleUrls: ['./add-maintenance.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInput,
    IonSelect,
    IonLabel,
    IonSelectOption,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink,
  ],
})
export class AddMaintenancePage {
  private router = inject(Router);
  selectMaintenance: string = '';
  date: string = '';
  odometer?: number;
  numberOfDaysorMonths: string = '';
  optionDaysorMonths: string = '';

 
  constructor() {}
  save() {
    const now = new Date();
    const value = Number(this.numberOfDaysorMonths);

    if(this.optionDaysorMonths === 'months'){
      now.setMonth(now.getMonth() + value);

    }else{
      now.setDate(now.getDate()+ value);
    }
    const maintenancedata = {
      type: this.selectMaintenance,
      date: this.date,
      odometer: Number(this.odometer),
      remindervalue: Number(this.numberOfDaysorMonths),
      reminderunit: now.toLocaleDateString()
    };

    

    const list = JSON.parse(localStorage.getItem('maintenancedata') || '[]');
    list.push(maintenancedata);
    localStorage.setItem(
      'maintenancedata',
      JSON.stringify(list),
    );

    const reminderdata = {
      type: this.selectMaintenance,
      date: this.date,
      odometer: Number(this.odometer),
      emindervalue: Number(this.numberOfDaysorMonths),
      reminderunit: now.toLocaleDateString()
    }
    const remider = JSON.parse(localStorage.getItem('remiderdata') || '[]');
    remider.push(reminderdata);
    localStorage.setItem('reminderdata', JSON.stringify(remider));

    this.router.navigate(['content-page']);
  }
}
// const num = Number(this.odometer);
