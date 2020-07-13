import React from 'react';
import RowOfItem from './RowOfItem';

class ListOfItems extends React.Component {
    render() {
        return (
            <div className="col-8 shadow p-3 mb-5 bg-white rounded">

                <h4>List of items</h4>
                {/* Sort */}
                <ul>
                    <li onClick={this.props.sort} id="byName" className="btn btn-outline-primary">Sort by Name</li>
                    <li onClick={this.props.sort} id="byQuantity" className="btn btn-outline-primary">Sort by Quantity</li>
                </ul>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Image</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product, index) => {
                            return (
                                <RowOfItem index={index} product={product} togglePurchased={this.props.togglePurchased} togglePayLater={this.props.togglePayLater} />
                            )
                        })}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default ListOfItems;