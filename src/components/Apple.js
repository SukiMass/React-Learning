import React from "react";

class Apple extends React.Component {
    render() {
        const {appleInfo} = this.props;
        const {type,color} = appleInfo;
        return (
            <h2>This is {color} {type} Apple inside a class</h2>
        )
    }
}

export default Apple;