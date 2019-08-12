import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.sass';

export default class BookList extends Component {

    componentDidMount() {

    }; 

    render() {
        const { books } = this.props;
        return (
            <div className="book-list">
                Book List
                {
                    books.map((book) => {
                        return <BookListItem key={book.id} book={book} />
                    })
                }
            </div>
        );
    };
};