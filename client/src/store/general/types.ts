export const SET_LOADING = 'SET_LOADING';
export const NEW_ALERT = 'NEW_ALERT';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';
export const OPEN_DIALOG = 'OPEN_DIALOG';

export enum Variants {
    success,
    warning,
    error,
    info
}

export interface SetLoadingAction {
    type: typeof SET_LOADING,
    is_loading: boolean
}

export interface NewAlertAction {
    type: typeof NEW_ALERT,
    payload: {
        message: string,
        variant: keyof typeof Variants
    }
}

export interface OpenDialogAction {
    type: typeof OPEN_DIALOG,
    payload: {
        title?: string,
        message: string,
        actionMessage?: string,
        variant: keyof typeof Variants
        confirmation?: boolean,
        dispatch?: any,
        confirmMethod?: () => void,
        buttonText?: string
    }
}

export interface CloseDialogAction {
    type: typeof CLOSE_DIALOG
}



export type GeneralActionTypes = SetLoadingAction | NewAlertAction | OpenDialogAction | CloseDialogAction;