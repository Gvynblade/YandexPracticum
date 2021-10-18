export const TOGGLE_IS_FETCHING = 'appReducer/TOGGLE_IS_FETCHING' as const;
export const MODAL_OPEN = 'appReducer/MODAL_OPEN' as const;
export const MODAL_CLOSE = 'appReducer/MODAL_CLOSE' as const;



export interface IToggleIsFetching {
    readonly type: typeof TOGGLE_IS_FETCHING;
    readonly payload: {
        isFetching: boolean
    }
}

export interface IModalOpen {
    readonly type: typeof MODAL_OPEN;
    readonly payload: {
        isModalOpen: true,
        modalType: 'ingredient' | 'order' | 'feedOrder' | 'profileOrder'
    }
}

export interface IModalClose {
    readonly type: typeof MODAL_CLOSE;
    readonly payload: {
        isModalOpen: false,
        modalType: null
    }
}

export type TAppActions = IToggleIsFetching | IModalOpen | IModalClose;
