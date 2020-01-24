import React, { Component } from 'react';
import CharInfo from "./CharInfo";
class List extends Component {

    render() {
        const people = this.props.people;
        return (
            <div className="">
                {
                    people.map((p) => {
                        console.log(p)
                        return (
                            <di key={p.url}>
                                <h3 className="char-name">{p.name}</h3>
                                <CharInfo charInfo={p} />
                            </di>
                        )
                    })
                }
            </div>
        );
    }
}
export default List;