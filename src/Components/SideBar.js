import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
            <div className="col col-lg-2 side-bar">

                {/* Side Bar */}
                <button onClick={this.props.toggleData} id="Dad" className="btn btn-light btn-block">Dad</button>
                <button onClick={this.props.toggleData} id="Mom" className="btn btn-light btn-block">Mom</button>
                <button onClick={this.props.toggleData} id="Son" className="btn btn-light btn-block">Son</button>
                <button onClick={this.props.toggleData} id="Daughter" className="btn btn-light btn-block">Daughter</button>
            </div>
        )
    }
}

export default SideBar;