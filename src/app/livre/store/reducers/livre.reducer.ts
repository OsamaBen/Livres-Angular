import {LivreState} from '../state/livre.state';
import {ActionTypes, LivreActions} from '../actions/livre.action';
import {getShowEditModal} from '../selectors/livre.selector';

const initialLivreState: LivreState = {
  showAddModal: false,
  showEditModal: false
};

export function livreReducer(state: LivreState = initialLivreState, action: LivreActions): LivreState {
  switch (action.type) {
    case ActionTypes.SHOW_ADD_MODAL :
      return {
        showAddModal: true,
        showEditModal: false
      };
    case ActionTypes.SHOW_EDIT_MODAL :
      return {
        showAddModal: false,
        showEditModal: true
      };
    case ActionTypes.CLOSE_MODAL :
      return {
        showAddModal: false,
        showEditModal: false
      };
    default:
      return state;
  }
}
