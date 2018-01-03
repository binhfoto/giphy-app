import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const style = (theme) => ({
    size: {
        width: 20,
        height: 20,
        margin: 5
    }
});

const GiphyAvatar = ({classes, user}) => {
    return (
        <div className="giphy-avatar">
            {user ? <Avatar src={user.avatar_url} className={classes.size}/> : <Avatar className={classes.size}>Un</Avatar>}
            {user ? <a href={user.profile_url} target="_blank">{user.username}</a> : <span>N/A</span>}
        </div>
    );
};

GiphyAvatar.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object
};

export default withStyles(style)(GiphyAvatar);