import React from 'react';
import PlayerAPI from '../api';
import { Link } from 'react-router-dom';

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = props => {
    const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
    if (!player) {
        return <div>Sorry, but the player was not found</div>;
    }
    return (
        <div id="content" className="body">
            <h3>
                {player.name} (#{player.number})
            </h3>
            <h4>Position: {player.position}</h4>
            <Link to="/roster">Back</Link>
        </div>
    );
};

export default Player;
