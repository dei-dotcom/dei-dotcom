import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'content-page',
    loadComponent: () => import('./content-page/content-page.page').then( m => m.ContentPagePage)
  },
  {
    path: 'car-register',
    loadComponent: () => import('./car-register/car-register.page').then( m => m.CarRegisterPage)
  },
  {
    path: 'add-maintenance',
    loadComponent: () => import('./add-maintenance/add-maintenance.page').then( m => m.AddMaintenancePage)
  },
  {
    path: 'add-reminder',
    loadComponent: () => import('./add-reminder/add-reminder.page').then( m => m.AddReminderPage)
  },
  {
    path: 'update-mileage',
    loadComponent: () => import('./update-mileage/update-mileage.page').then( m => m.UpdateMileagePage)
  },
  {
    path: 'vehicle-profile',
    loadComponent: () => import('./vehicle-profile/vehicle-profile.page').then( m => m.VehicleProfilePage)
  },
  {
    path: 'maintenance',
    loadComponent: () => import('./maintenance/maintenance.page').then( m => m.MaintenancePage)
  },
  {
    path: 'reminder',
    loadComponent: () => import('./reminder/reminder.page').then( m => m.ReminderPage)
  },
];
