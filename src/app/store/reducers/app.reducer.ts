import {AppState} from '../state/app.state';
import {AppActions, AppActionsTypes} from '../actions/app.actions';

const initialAppState: AppState = {
  goToHome : true,
  goToLivre : false
};

export function appReducer(state = initialAppState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionsTypes.toHome : return { goToHome : true ,  goToLivre : false} ;
    case AppActionsTypes.toLivre : return { goToHome : false ,  goToLivre : true} ;
    default : return state ;
  }
}
