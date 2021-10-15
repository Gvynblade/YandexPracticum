import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import store from '../store'
import { TAppActions } from '../actions/app'
import { TAuthActions } from '../actions/auth'
import { TConstructorActions } from '../actions/constructor'
import { TIngredientsActions } from '../actions/ingredients'
import { TOrderActions } from '../actions/order'
import { TWsActions } from '../actions/web-socket'

type TApplicationActions = TAppActions | TAuthActions | TConstructorActions | TIngredientsActions |
TOrderActions | TWsActions ;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>

export type {RootState, AppDispatch, AppThunk}
