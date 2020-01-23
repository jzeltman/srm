import React from 'react';
import { connect } from 'react-redux'

const GridItem = props => {
    console.log('GridItem props:', props);
    let style = { backgroundImage: `url(${props.contact.PHOTO})` }
    return (
        <li key={props.key}
            className={`Dashboard-List-Contact-Grid-Item ${props.contact.PHOTO ? 'photo' : 'empty'}`}
            style={style}
        >
            {props.contact.PHOTO ? <></> : <i className="fas fa-user-circle"></i>}
            <div>
                <h4>{props.contact.FN}</h4>
                <footer>
                    <button className="contacted">
                        <i className="far fa-check-square"></i>
                    </button>
                    <button className="add-update">
                        <i className="far fa-sticky-note"></i>
                        <span>Update +</span>
                    </button>
                    <button className="add-action">
                        <i className="far fa-bell"></i>
                        <span>Action +</span>
                    </button>
                </footer>
            </div>
        </li>
    )
}

export default connect()(GridItem);