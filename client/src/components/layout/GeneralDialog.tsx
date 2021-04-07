import React from 'react';
import clsx from 'clsx';

// Material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Typography } from '@material-ui/core';

// Reduz
import { connect, ConnectedProps } from 'react-redux';
import { amber } from '@material-ui/core/colors';

import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

const variantIcon = {
    success: CheckIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },

    success: {
        color: '#0F0',
    },
    error: {
        color: theme.palette.error.main,
    },
    info: {
        color: theme.palette.primary.main,
    },
    warning: {
        color: amber[900],
    },
    icon: {
        fontSize: 30,
    },
}));







interface RootState {
    general: {
        dialog: {
            open: boolean,
            title?: string,
            message: string,
            actionMessage?: string,
            variant: keyof typeof variantIcon
            confirmation?: boolean,
            dispatch?: any,
            confirmMethod?: () => void,
            buttonText?: string
        }
    }
}

const mapState = (state: RootState) => ({
    dialog: state.general.dialog
})

const mapDispatch = {
    closeDialog: () => ({ type: 'CLOSE_DIALOG' }),
    dispatch: (dispatch: any) => (dispatch)
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>


type Props = PropsFromRedux & {
}





const GeneralDialog = (props: Props) => {

    const classes = useStyles();
    
    const handleSubmit = () => {
        if(props.dialog.dispatch)
            props.dispatch(props.dialog.dispatch);
        if(props.dialog.confirmMethod)
            props.dialog.confirmMethod();
        props.closeDialog();
    }

    const getTitle = () => {

        if(props.dialog.variant && props.dialog.variant != null) {
            const Icon = variantIcon[props.dialog.variant];
            return (
                <DialogTitle id="form-dialog-title">
                    <Grid container spacing={1}>
                        <Grid item>
                            <Icon className={clsx(classes.icon, classes[props.dialog.variant])} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h6'>{props.dialog.title}</Typography>
                        </Grid>
                    </Grid>
                </DialogTitle>
            )
        } else {
            return null;
        }

    }

    return (
        <Dialog 
            maxWidth="md" 
            fullWidth
            open={props.dialog.open} 
            onClose={props.closeDialog} 
            aria-labelledby="form-dialog-title"
        >
            { getTitle() }
            <DialogContent>
                {props.dialog.message ? props.dialog.message : ''}
                <br/>
                { props.dialog.actionMessage ? (
                    <p><b>{props.dialog.actionMessage}</b></p>
                ) : null}
            </DialogContent>
            { props.dialog.confirmation ? (
                <DialogActions>
                    <Button onClick={props.closeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {props.dialog.buttonText ? props.dialog.buttonText : 'Confirm'}
                    </Button>
                </DialogActions>
            ) : (
                <DialogActions>
                    <Button onClick={props.closeDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            )}
        </Dialog>
    );
}




export default connector(GeneralDialog);