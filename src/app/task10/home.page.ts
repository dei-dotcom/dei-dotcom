import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonHeader,
        IonToolbar,
        IonTitle, 
        IonContent, 
        IonInput, 
        IonLabel,
        IonButton,
        IonItem,
        IonList ,
        IonGrid,
        IonRow,
        IonCol
      } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonGrid,
            IonRow,
            IonCol,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonInput,
            IonLabel, 
            IonButton, 
            IonItem, 
            FormsModule, 
            ],
})
export class HomePage implements OnInit{
  lastname = '';
  firstname = '';
  middlename = '';
  address = '';
  contact = '';
  age: number | null = null;
  civilStatus = '';
  email = '';


 person: any = {};
  show() {
  this.person ={
      lastname: this.lastname,
      firstname: this.firstname,
      middlename: this.middlename,
      address: this.address,
      contact: this.contact,
      age: this.age,
      civilStatus: this.civilStatus,
      email: this.email,
    };


     localStorage.setItem('person', JSON.stringify(this.person));


    
  }

  reset() {
    this.lastname = '';
    this.firstname = '';
    this.middlename = '';
    this.address = '';
    this.contact = '';
    this.age = null;
    this.civilStatus = '';
    this.email = '';
  }
  ngOnInit(){
    const data = localStorage.getItem('person');
    this.person = data ? JSON.parse(data) : {};
  }
}
