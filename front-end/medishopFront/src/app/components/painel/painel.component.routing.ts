import {Routes, RouterModule} from '@angular/router';
import {PainelComponent} from "./painel.component";
const routes: Routes = [

  {
    path: '',
    component: PainelComponent,
    data: {
      title: "SISC - Painel"
    }
  },
  {
    path:'create-user',
    loadChildren: () => import('src/app/components/painel/login/login.module').then((m) => m.LoginModule)
  },
  {
    path:'login',
    loadChildren: () => import('src/app/components/painel/create-user/create-user.module').then(m => m.CreateUserModule),
  }
];

export const PainelRouting = RouterModule.forChild(routes);
