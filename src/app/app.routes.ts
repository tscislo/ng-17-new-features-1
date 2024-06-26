import {Routes} from '@angular/router';
import {ForLoopComponent} from "./for-loop/for-loop.component";
import {IfElseComponent} from "./if-else/if-else.component";
import {SwitchComponent} from "./switch/switch.component";
import {NotAuthComponent} from "./not-auth/not-auth.component";
import {isEnabledGuard} from "./is-enabled.guard";
import {StandaloneComponent} from "./standalone/standalone/standalone.component";
import {TakeUntilDestroyedComponent} from "./take-until-destroyed/take-until-destroyed.component";
import {RequiredInputsComponent} from "./required-inputs/required-inputs.component";
import {RoutableInputParametersComponent} from "./routable-input-parameters/routable-input-parameters.component";

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
    },
    {
        component: TakeUntilDestroyedComponent,
        path: 'take-until-destroyed'
    },
    {
        component: RequiredInputsComponent,
        path: 'required-inputs'
    },
    {
        component: RoutableInputParametersComponent,
        path: 'routable-input-parameters/:id'
    }
];
