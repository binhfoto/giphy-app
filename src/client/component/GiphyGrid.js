import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getGiphty, showDialog} from '../action';
import GiphyItem from './GiphyItem';
import GiphyFullView from './GiphyFullView';
import '../style/index.css';

class GiphyGrid extends PureComponent {

    componentDidMount () {
        this.props.getData();
    }

    render () {
        let data = this.props.data.map((data) => {
            return {
                id: data.id,
                user: data.user,
                images: {
                    preview: {
                        url: data.images.fixed_width_still.url
                    },
                    original: {
                        url: data.images.original.url,
                        width: data.images.original.width,
                        height: data.images.original.height
                    }
                }
            };
        });
        return (
            <div className="giphy-list">
                {
                    data.map((item) => {
                        return <GiphyItem key={item.id} item={item} showFullView={this.props.showFullView}/>
                    })
                }
                <GiphyFullView/>
            </div>

        );
    }
}

GiphyGrid.propTypes = {
    data: PropTypes.array.isRequired,
    showFullView: PropTypes.func
};

export default connect(
    ({data}) => ({data}),
    (dispatch) => {
        return {
            getData: () => {
                dispatch(getGiphty(0));
            },
            showFullView: (fullView) => {
                dispatch(showDialog(fullView));
            }
        };
    }
)(GiphyGrid);