import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

import {hideDialog} from '../action'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const GiphyFullView = ({originalUrl, hideDialog}) => {
    return (
        originalUrl &&
        <Dialog
            open={Boolean(originalUrl)}
            transition={Transition}
        >
            <div className="giphy-fullview">
                <img src={originalUrl}/>
                <IconButton aria-label="Close" onClick={hideDialog} className="giphy-fullview-close">
                    <CloseIcon />
                </IconButton>
            </div>
        </Dialog>
    );
};

GiphyFullView.propType = {
    originalUrl: PropTypes.string,
    hideDialog: PropTypes.func
};

export default connect(
    ({originalUrl}) => ({originalUrl}),
    (dispatch) => ({
        hideDialog: () => dispatch(hideDialog())
    })
)(GiphyFullView);