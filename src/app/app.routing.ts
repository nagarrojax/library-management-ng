import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { CatalogComponent } from './catalog';
import { SignupComponent } from './signup';
import { AddBooksComponent } from './add-books';
import { SearchCatalogComponent } from './search-catalog';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'update', component: AddBooksComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);