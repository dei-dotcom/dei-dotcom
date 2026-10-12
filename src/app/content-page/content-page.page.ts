import { Component, OnInit , inject} from '@angular/core';
import { Router ,RouterLink} from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonTabs, IonButtons, IonButton, IonTabBar, IonTabButton, IonIcon, IonCard, IonRouterLink } from '@ionic/angular';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.page.html',
  styleUrls: ['./content-page.page.scss'],
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonTabs,
    IonTabBar,
    IonButton,
    IonButtons,
    IonTabButton,
    IonIcon,
    IonCard, IonRouterLink,RouterLink]
})
export class ContentPagePage implements OnInit{

  private router = inject(Router);

  mycarbrand = '';
  mycarmodel = '';
  mycaryear = '';

  currentMileage = '';
  Maintenance = '';
  NextMaintenance = '';
  registration = '';
  duedate = '';
  service = '';
  duesoon = '';
  constructor() {
    const data = localStorage.getItem('vehicledata');
    if(data){
      try{
        const saved = JSON.parse(data);
        this.mycarbrand = saved.brand;
        this.mycarmodel = saved.model;
        this.mycaryear = saved.year;
        this.currentMileage = saved.odometer;
        
        const mileage = Number(saved.odometer);
        
        if (mileage >= 50000) {
            this.service = 'Tire replacement';
          } else if (mileage >= 34200) {
            this.service = 'Brake replacement';
            this.Maintenance = 'tire replacement';
            this.NextMaintenance = '50000 km'
          } else if (mileage >= 10000) {
            this.service = 'Change oil';
            this.Maintenance = 'brake replacement';
            this.NextMaintenance = '34200 km'
          } else {
            this.service = 'No service due';
}
        
      }catch(e){
        alert('no data record');
      }
    }
   }
   addmaintenance(){
    this.router.navigate(['/add-maintenance']);
   }
   addreminder(){
    this.router.navigate(['/add-reminder']);
   }
   updatemileage(){
    this.router.navigate(['/update-mileage']);
   }
 ngOnInit() {
  const saved = JSON.parse(localStorage.getItem('vehicledata') || '{}');
  this.currentMileage = saved.odometer;
}

}
