import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

export class BooksData {

    constructor(uri) {
        this._uri = uri;
        this._client = new ApolloClient({
            uri: this._uri,
        });
    }

    all() {
        return this._client.query({
            query: gql`
              query AllBooks {
                books {
                    id
                    isbn
                    title
                    authorId
                    category
                    price
                    quantity
                }
              }
            `,
            fetchPolicy: 'network-only',
        }).then(result => result.data.books);
    }

    one(id) {
        return this._client.query({
            query: gql`
                query OneBook($id: ID) {
                    book(id: $id) {
                        id
                        isbn
                        title
                        authorId
                        category
                        price
                        quantity
                    }
                }
            `,
            variables: {
                id
            },
            fetchPolicy: 'network-only',
        }).then(result => result.data.books);
    }

    insert(book) {
        return this._client.mutate({
            mutation: gql`
                mutation InsertBook($book: BookInput) {
                    insertBook(book: $book) {
                        id
                        isbn
                        title
                        authorId
                        category
                        price
                        quantity
                    }
                }
            `,
            variables: {
                book
            },  
        }).then(result => result.data.insertBook);
    }
}