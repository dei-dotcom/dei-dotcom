import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router'
import { IonContent, IonIcon, IonButton, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonButtons, IonIcon],
})
export class HomePage {
  private router = inject(Router);
 
  nextpage() {
    this.router.navigate(['/car-register'])
  }

  
}
