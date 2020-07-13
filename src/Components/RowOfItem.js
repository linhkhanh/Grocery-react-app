import React from 'react';
class RowOfItem extends React.Component {
    render() {
        return (
            <tr className={this.props.product.isPaidLater ? "grey" : ''}>
                <th scope="row">{this.props.index + 1}</th>
                <td>{this.props.product.item}</td>
                <td><img src={this.props.product.image} alt="image of item"/></td>
                <td>{this.props.product.units}</td>
                <td>{this.props.product.quantity}</td>
                <td>
                    <button onClick={this.props.togglePurchased} id={this.props.index} className="btn btn-outline-warning"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg></button>
                    <button onClick={this.props.togglePayLater} id={this.props.index} className="btn btn-outline-secondary">Later</button>

                </td>
            </tr>
        )
    }
}
export default RowOfItem;