import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.page.html',
  styleUrls: ['./add-reminder.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSelect,IonSelectOption,IonLabel,IonInput,IonButtons,IonButton,IonIcon, RouterLink]
})
export class AddReminderPage  {
private router = inject(Router);
  constructor() { }

  save(){
    this.router.navigate(['content-page']);
  }
}
