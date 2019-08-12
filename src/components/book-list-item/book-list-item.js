import React from 'react';
import './book-list-item.sass';

const BookListItem = ({book}) => {
    const { title, author } = book;
    return (
        <div className='book-list-item'>
            <span>{title}</span>
            <span>{author}</span>
        </div>
    );
};

export default BookListItem;