import React from 'react';
import SideBar from './SideBar';
import ListOfItems from './ListOfITems';
import FormAddItem from './FormAddItem';
import {Dad, Mom, Son, Daughter} from './Data';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          currentPerson: "Dad",
          products: {
              Dad,
              Mom,
              Son,
              Daughter
          }
      }
  }

  addNewProduct = (newItem) => {
      const products = this.state.products;
      products[this.state.currentPerson] = [newItem, ...products[this.state.currentPerson]]
      this.setState({
          products: products
      })
  }
  // change data
  toggleData = (event) => {
      const person = event.target.id;
      this.setState({
          currentPerson: person
      })
  }

  // toggle purchase
  togglePurchased = (event) => {
      event.preventDefault();
      const index = event.currentTarget.id;
      const products = this.state.products;
      products[this.state.currentPerson].splice(index, 1);
      this.setState({
          products: products
      });
  }

  // sort item
  sort = (event) => {
      const sortBy = event.target.id;
      const products = this.state.products;
      if (sortBy === "byName") {
          products[this.state.currentPerson].sort((item1, item2) => {
              return item1.item.localeCompare(item2.item)
          });
      } else {
          products[this.state.currentPerson].sort((item1, item2) => {
              return item1.quantity - item2.quantity
          });
      }
      this.setState({
          products: products
      })
  }

  // toggle class later
  togglePayLater = (event) => {
      const index = event.target.id;
      const products = this.state.products;
      products[this.state.currentPerson][index].isPaidLater ? 
      products[this.state.currentPerson][index].isPaidLater = false : 
      products[this.state.currentPerson][index].isPaidLater = true
      this.setState({
          products: products
      })
  }
  //   render
  render() {
      return (
          <div>
              <h1><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-basket2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.111 7.186A.5.5 0 0 1 1.5 7h13a.5.5 0 0 1 .489.605l-1.5 7A.5.5 0 0 1 13 15H3a.5.5 0 0 1-.489-.395l-1.5-7a.5.5 0 0 1 .1-.42zM2.118 8l1.286 6h9.192l1.286-6H2.118z" />
                  <path fill-rule="evenodd" d="M11.314 1.036a.5.5 0 0 1 .65.278l2 5a.5.5 0 1 1-.928.372l-2-5a.5.5 0 0 1 .278-.65zm-6.628 0a.5.5 0 0 0-.65.278l-2 5a.5.5 0 1 0 .928.372l2-5a.5.5 0 0 0-.278-.65z" />
                  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zM0 6.5A.5.5 0 0 1 .5 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1z" />
              </svg> Grocery</h1>

              <div className="row">
                  {/* SIDEBAR */}
                  <SideBar toggleData={this.toggleData} />

                  <div className="col">
                      <h2><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-badge" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v11.755S4 12 8 12s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                          <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
                      </svg>{this.state.currentPerson}</h2>

                      <div className="row col">

                          {/* Form */}
                          <FormAddItem addNewProduct={this.addNewProduct} />

                          {/* LIST OF ITEM */}
                          <ListOfItems sort={this.sort} products={this.state.products[this.state.currentPerson]} togglePurchased={this.togglePurchased} togglePayLater={this.togglePayLater} />
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}

export default App;
