import React, { SyntheticEvent } from "react";
import clsx from "clsx";
import { amber, green } from "@material-ui/core/colors";
import { makeStyles, Snackbar, SnackbarCloseReason, SnackbarContent } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";



const useStyles1 = makeStyles((theme) => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: "flex",
        alignItems: "center",
    },
}));



export const variantIcons = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

interface SnackbarProps {
    className?: string,
    message?: string,
    onClose?: any,
    variant: keyof typeof variantIcons
};

function MySnackbarContentWrapper(props: SnackbarProps) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcons[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

const Alert = (props: any) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event: SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}>
            <MySnackbarContentWrapper
                onClose={handleClose}
                variant={props.variant}
                message={props.message}
            />
        </Snackbar>
    );
};

const Alerts = (props: any) => {
    return props.alerts ? 
		props.alerts.map((alert: any, index: number) => {
			return (
				<Alert
					key={index}
					message={alert.message}
					variant={alert.variant}
				/>
			);
		})
        : null;
}; //end ()

const mapStateToProps = (state: any) => ({
    alerts: state.general.alerts,
});

export default connect(mapStateToProps)(Alerts);
