import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BookForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = this.initState();
    }

    initState() {
        return {
            isbn: '',
            title: '',
            authorId: 0,
            category: '',
            price: 0.0,
            quantity: 0,
        };
    }

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.type === 'number'
                ? Number(e.target.value)
                : e.target.value,
        });
    };

    onClick = () => {
        this.props.onSubmit({ ...this.state });
        this.setState(this.initState());
    };

    render() {
        return <div>
            <h2>Book Form</h2>
            <form>
                <div>
                    <label htmlFor="isbn-input">ISBN</label>
                    <input type="text" id="isbn-input" name="isbn"
                        value={this.state.isbn} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="title-input">Title</label>
                    <input type="text" id="title-input" name="title"
                        value={this.state.title} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="authorId-input">Author Id</label>
                    <input type="text" id="authorId-input" name="authorId"
                        value={this.state.authorId} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="category-input">Category</label>
                    <input type="text" id="category-input" name="category"
                        value={this.state.category} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="price-input">Price</label>
                    <input type="text" id="price-input" name="price"
                        value={this.state.price} onChange={this.onChange} />
                </div>
                <div>
                    <label htmlFor="quantity-input">Quantity</label>
                    <input type="text" id="quantity-input" name="quantity"
                        value={this.state.quantity} onChange={this.onChange} />
                </div>
                <button type="button">Submit Book</button>
            </form>
        </div>;
    }
}