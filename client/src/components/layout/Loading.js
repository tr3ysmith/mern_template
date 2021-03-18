import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -36,
        marginLeft: -36,
        zIndex: 9999
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 9998,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
}));

const Loading = (props) => {

    const classes = useStyles();

    return (
        props.loading ? (
            <div className={classes.background}>
                <CircularProgress size={72} className={classes.loading} />
            </div>
        ) : null
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.general.loading
    }
}

export default connect(mapStateToProps)(Loading);