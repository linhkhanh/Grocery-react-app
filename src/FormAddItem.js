import React from 'react';

class FormAddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            isPurchased: false,
            isPaidLater: false,
            image: ''
        }
    }

    // handle change
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    // handle submit
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewProduct(this.state);
        this.setState({
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            image: ''
        })
    }
    render() {
        return (
            <div className="col-4 shadow p-3 mb-5 bg-white rounded">
                <form onSubmit={this.handleSubmit}>
                    <h4>Add more items</h4>
                    <div className="form-group">
                        <label htmlFor='item'>Item</label>
                        <input type='text' value={this.state.item} onChange={this.handleChange} id='item' className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor='brand'>Brand</label>
                        <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor='units'>Units</label>
                        <input type='text' value={this.state.units} onChange={this.handleChange} id='units' className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor='quantity'>Quantity</label>
                        <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor='image'>Image</label>
                        <input type='text' value={this.state.image} onChange={this.handleChange} id='image' className="form-control" />
                    </div>
                    <button type='submit' className="btn btn-info btn-lg col"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                    </svg></button>
                </form>
            </div>
        )
    }
}
export default FormAddItem;