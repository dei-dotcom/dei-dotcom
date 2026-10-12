import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink
  ],
})
export class ReminderPage implements OnInit {
  records: any[] = [];
  constructor() {}

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    try {
      this.records = JSON.parse(localStorage.getItem('reminderdata') || '[]');
    } catch {
      this.records = [];
    }
  }
}
