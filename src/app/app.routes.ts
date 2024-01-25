import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"signUp",component:SignUpComponent,title:"sign up page"},
    {path:"showAllData",component:ShowDataComponent,title:"Data Base Contents"},
    {path:"deleteData",component:DeleteDataComponent,title:"Unsubscribed success"},
    {path:"login",component:LoginComponent,title:'Welcome to login page'}
];
