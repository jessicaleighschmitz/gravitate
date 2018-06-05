import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PlansComponent } from './plans/plans.component';

const appRoutes: Routes = [
    {
    	 path: '',
    	 component: WelcomeComponent
    },
    {
       path: 'login',
       component: LoginComponent
    },
    {
       path: 'plans',
       component: PlansComponent
    },
    {
       path: 'contact',
       component: ContactComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
