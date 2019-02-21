import {createFeatureSelector, createSelector} from '@ngrx/store';
import {LivreState} from '../state/livre.state';

// export const getLivreFeatureState = createFeatureSelector<LivreState>('LivreState');
export const getLivreState = (state: LivreState) => state;

export const getShowAddModal = createSelector(
  getLivreState,
  s => s.showAddModal
);
export const getShowEditModal = createSelector(
  getLivreState,
  s => s.showEditModal
);
