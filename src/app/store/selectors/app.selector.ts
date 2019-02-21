import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {LivreState} from '../../livre/store/state/livre.state';

// export const getAppState = createFeatureSelector<AppState>('AppState');
export const getAppState = ( state: AppState ) => state;




export const getToHome = createSelector(getAppState, s => s.goToHome);
export const getToLivre = createSelector(getAppState, s => s.goToLivre);


