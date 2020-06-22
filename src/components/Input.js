import React from 'react';
import './Input.css';


export default class Input extends React.Component {
    render() {
        return (
            <div className="input_container">
                <input
                    value={this.state.newItemName}
                    onChange={(event) => this.updateNewItemName(event.target.value)}
                    placeholder="New Item"></input>
                <button onClick={() => this.addItem()}>+</button>
            </div>
        );
    }

    addItem() {
        this.setState({
            items: [...this.state.items, { name:"Apples", price: 3}],
        });
    }

    updateNewItemName(newItemName) {
        this.setState({
            newItemName: newItemName,
        });
    }
}
