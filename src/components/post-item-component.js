import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <Link to={"/posts/" + props.id} className="post-item list-group-item">
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3>{props.title}</h3>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}