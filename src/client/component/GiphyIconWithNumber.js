import React from 'react';
import PropTypes from 'prop-types';

const GiphyIconWithNumber = ({iconName, number}) => {
    return (
        <div className="giphy-icon-with-number">
            <i className="material-icons md-dark md-18">{iconName}</i>
            <span >{number}</span>
        </div>
    );
};

GiphyIconWithNumber.propTypes = {
    iconName: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default GiphyIconWithNumber;