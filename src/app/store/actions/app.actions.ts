import {Action} from '@ngrx/store';

export enum AppActionsTypes {
  toHome = '[AppState] Go To Home',
  toLivre = '[AppState] Go To Livre '
}

export class ToHome implements Action {
 readonly type = AppActionsTypes.toHome;
}
export class ToLivre  implements Action {
 readonly type = AppActionsTypes.toLivre;
}

export type AppActions = ToHome | ToLivre ;
