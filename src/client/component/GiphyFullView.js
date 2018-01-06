import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import { LinearProgress } from 'material-ui/Progress';

import {hideDialog} from '../action'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class GiphyFullView extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    handleFinishLoading = () => {
        this.setState({
            loading: false
        });
    }

    render () {
        const {fullView: {url = null, width = 0, height = 0}, hideDialog} = this.props;
        const fullViewStyle = {
            width: `${width}px`
        };
        const imgStyle = {
            height: `${height}px`
        };
        return (
            url &&
            <Dialog open={Boolean(url)} transition={Transition}>
                <div className="giphy-fullview" style={fullViewStyle}>
                    {this.state.loading && <LinearProgress className="giphy-loading-bar"/>}
                    <img src={url} onLoad={this.handleFinishLoading} style={imgStyle}/>
                    <IconButton aria-label="Close" onClick={hideDialog} className="giphy-fullview-close">
                        <CloseIcon />
                    </IconButton>
                </div>
            </Dialog>
        );
    }
}

GiphyFullView.propType = {
    fullView: PropTypes.object,
    hideDialog: PropTypes.func
};

export default connect(
    ({fullView}) => ({fullView}),
    (dispatch) => ({
        hideDialog: () => dispatch(hideDialog())
    })
)(GiphyFullView);