import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GiphyAvatar from './GiphyAvatar';
import GiphyIconWithNumber from './GiphyIconWithNumber';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GiphyItem = ({item: {user, images}, showFullView}) => {
    let onClick = () => showFullView(images.original);
    return (
        <div className="giphy-item">
            <div className="giphy-box">
                <div className="giphy-preview" style={{backgroundImage: `url(${images.preview.url})`}} onClick={onClick}></div>
                <div className="giphy-info">
                    <GiphyIconWithNumber iconName="remove_red_eye" number={getRandomInt(500, 1000)}/>
                    <GiphyIconWithNumber iconName="comment"        number={getRandomInt(1, 50)}/>
                    <GiphyIconWithNumber iconName="favorite"       number={getRandomInt(1, 200)}/>
                </div>

            </div>
            <GiphyAvatar user={user}/>
        </div>
    );
};

GiphyItem.propTypes = {
    item: PropTypes.object.isRequired,
    showFullView: PropTypes.func
};

export default GiphyItem;