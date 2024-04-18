import {Routes} from '@angular/router';
import {ForLoopComponent} from "./for-loop/for-loop.component";
import {IfElseComponent} from "./if-else/if-else.component";
import {SwitchComponent} from "./switch/switch.component";
import {NotAuthComponent} from "./not-auth/not-auth.component";
import {isEnabledGuard} from "./is-enabled.guard";
import {StandaloneComponent} from "./standalone/standalone/standalone.component";

export const routes: Routes = [
    {
        component: ForLoopComponent,
        path: 'for-loop'
    },
    {
        component: IfElseComponent,
        path: 'if-else'
    },
    {
        component: SwitchComponent,
        path: 'switch'
    },
    {
        component: NotAuthComponent,
        path: 'not-auth',
        canActivate: [isEnabledGuard]
    },
    {
        component: StandaloneComponent,
        path: 'standalone'
    },
    {
        loadChildren: () => import('./not-standalone/not-standalone.module').then(m => m.NotStandaloneModule),
        path: 'not-standalone'
    }
];
