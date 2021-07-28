import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
query {
  allAuthors {
    name
    born
    bookCount
  }
}
`

export const ALL_BOOKS = gql`
query {
  allBooks {
    author
    title
    published
  }
}
`

export const NEW_BOOK = gql`
mutation newBook($title: String!, $author: String!, $published: Int!, $genres: [ String! ]) {
  addBook(
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
  ) {
    title,
    author,
    published,
    genres
  }
}
`

export const UPDATE_AUTHOR = gql`
mutation updateAuthor($name: String!, $born: Int!) {
    updateAuthor(
        name: $name,
        born: $born
    ) {
        author,
        born
    }
}
`