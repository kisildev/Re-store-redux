import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import store from '../../store';
import './book-list.sass';
import BookStoreService from '../../services/bookstore-service';

class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }; 

    render() {
        const { books, loading, error } = this.props;

        if(loading) {
            return <Spinner />;
        }

        if(error) {
            return <ErrorIndicator />;
        }

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

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
};

export default withBookstoreService()
    (connect(mapStateToProps, mapDispatchToProps)(BookList));