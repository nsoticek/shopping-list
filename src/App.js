import React from 'react';
import Header from './components/Header';
import './App.css';
import ShoppingList from './components/ShoppingList.jsx';
import Input from './components/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { item: "Apfel", price: "2.99" },
        { item: "Banane", price: "7.99" },
        { item: "Keine Banane", price: "4.99" },
        { item: "Ananas", price: "14.99" },
      ], 
      newItemName: '',
    }
  }

  addItem() {
    this.setState({
      items: [...this.state.items, { item: this.state.newItemName, price: 3 }],
    });
      this.state.newItemName = '';
  }

  updateNewItemName(newItemName) {
    this.setState({
      newItemName: newItemName,
    });
  }

  render() {
    const shoppingLists = this.state.items;

    return (
      <div className="shopping_container">
        <Header />
        <ShoppingList shoppingList={shoppingLists} />
        
        <div className="input_container">
          <input
            value={this.state.newItemName}
            onChange={(event) => this.updateNewItemName(event.target.value)}
            placeholder="New Item"></input>
          <button onClick={() => this.addItem()}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
