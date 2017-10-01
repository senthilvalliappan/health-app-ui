import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


import { StartComponent } from './start/start.component';
import { ProfileComponent } from './profile/profile.component';
import { WeightComponent } from './weight/weight.component';

const routes:Routes =[
{
	path:'',
	component:StartComponent
},
{
	path:'profile',
	component:ProfileComponent

},
{
	path:'weight',
	component:WeightComponent
}

];

export const routing=RouterModule.forRoot(routes);