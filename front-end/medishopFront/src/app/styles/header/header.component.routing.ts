import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from "./header.component";
const routes: Routes = [

  {
    path: '',
    component: HeaderComponent
  },
  {
    path:'painel',
    loadChildren: () => import('src/app/components/painel/painel.module').then((m) => m.PainelModule)
  }
];

export const HeaderRouting = RouterModule.forChild(routes);
