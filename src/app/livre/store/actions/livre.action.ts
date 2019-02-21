import {Action} from '@ngrx/store';

export enum ActionTypes {
  SHOW_ADD_MODAL = '[Livre] show add modal action',
  SHOW_EDIT_MODAL = '[Livre] show edit modal action',
  CLOSE_MODAL = '[Livre] close modal action',
}
export class ShowAddModalAction implements Action {
  readonly type = ActionTypes.SHOW_ADD_MODAL;
}

export class ShowEditModalAction implements Action {
  readonly type = ActionTypes.SHOW_EDIT_MODAL;
}

export class CloseModalAction implements Action {
  readonly type = ActionTypes.CLOSE_MODAL;
}


export type LivreActions = ShowAddModalAction | ShowEditModalAction | CloseModalAction ;

