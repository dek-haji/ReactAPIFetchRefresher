import React, { Component } from 'react';

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open() {
        this.setState({ expanded: !this.state.expanded})
    }
    close() {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    render() {
        const info = this.props.CharInfo;
        console.log(info)
        if (!this.state.expanded) {
            return <button className="btn btn-info" onClick= {this.open}>Show Info</button>
        }
        return (
            <div>
                <button onClick={this.close}>Hide Info</button>
                <ul>
                    <li><h2>Gender: {info.gender}</h2> </li>
                    <li><h2>Birthday: {info.birth_year}</h2> </li>
                      <li><h2>Hair color: {info.hair_color}</h2> </li>
                </ul>

        </div>
    )
    }
}
export default CharInfo
