import React from "react";
import "./ShoppingListItem.css";

export default class ShoppingListItem extends React.Component {
    render() {
        var shoppingList = this.props.shoppingList;
        return (
            <div className="list_container">
                <h3>Item: {shoppingList.item}</h3>
                <h4>Price: {shoppingList.price}</h4>
            </div>
        );
    }
}
