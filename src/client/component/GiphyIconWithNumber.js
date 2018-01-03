import React from 'react';
import PropTypes from 'prop-types';

const GiphyIconWithNumber = ({icon_name, number}) => {
    return (
        <div className="giphy-icon-with-number">
            <i className="material-icons md-dark md-18">{icon_name}</i>
            <span >{number}</span>
        </div>
    );
};

GiphyIconWithNumber.propTypes = {
    icon_name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default GiphyIconWithNumber;