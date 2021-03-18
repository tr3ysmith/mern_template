import React from 'react';
import Alerts from './Alerts';
import GeneralDialog from './GeneralDialog';
import Loading from './Loading';

function AppLayout(props) {

        return(
            <div>
                <Loading />
                <GeneralDialog />
                <Alerts />
                {props.children}
            </div>
        );

}


export default AppLayout;