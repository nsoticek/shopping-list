import React from "react";
//import "./ShoppingList.css";
import ShoppingListItem from './ShoppingListItem';
import './ShoppingList.css';

export default class ShoppingList extends React.Component {
    render() {
        const shoppingLists = this.props.shoppingList;
        return (
            <div>
                {shoppingLists.map(shoppingList => {
                    return <div className="item_container"><ShoppingListItem shoppingList={shoppingList} /></div>;
                })}
            </div>
        );
    }
}