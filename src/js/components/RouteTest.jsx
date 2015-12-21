import React from 'react';

export default React.createClass({

    render() {
        return (
            <h1>{this.props.params.data}</h1>
        );
    }
});
