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
              query {
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
        }).then(result => result.data.books);
    }

    one(id) {
        return this._client.query({
            query: gql`
              query(id: ${id}) {
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
        }).then(result => result.data.books);
    }
}