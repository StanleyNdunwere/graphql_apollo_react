import { useQuery, gql } from '@apollo/client'

export const FETCH_ALL_BOOKS_QUERY = gql`
  {
    books{
      id
      name
      genre
      author{
        id
        name
        age
      }
    }
  }`

export const FETCH_ALL_AUTHORS_QUERY = gql`
  {
    authors{
      id
      name
      age
      books{
        id
        name
        genre
      }
    }
  }`

export const FETCH_AN_AUTHOR_QUERY = gql`
  query Author($id:ID){
    author(id:$id){
      name
      age
      books {
        id
        name
        genre
      }
    }
  }
  `

export const FETCH_A_BOOK_QUERY = gql`
  query Book($id:ID){
    book(id:$id){
      name
      genre
      author{
        name
        age
        books{
          id
          name
          genre
        }
      }
    }
  }`