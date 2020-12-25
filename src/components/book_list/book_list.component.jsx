import React, { useEffect, useState } from 'react'

const BOOK = "book"
const AUTHOR = "author"

export default function BookList(props) {
  const [allAuthors, setAllAuthors] = useState(() => {
    //fetch all authors
  })
  const [allBooks, setAllBooks] = useState(() => {
    // fetch all books
  })
  const [showOverlay, setShowOverlay] = useState(true);
  const [detailsToShow, setDetailsToShow] = useState({ type: BOOK, details: {} })
  const [newBook, addNewBook] = useState({});
  const [newAuthor, addNewAuthor] = useState({});


  const createNewBook = (title, genre, authorId) => {

  }
  const createNewAuthor = (name, age) => {

  }

  return (
    <div style={{
      fontFamily: "nunito, Arial",
    }}>
      {showOverlay &&
        <OverlayComponent
          detailsToShow={detailsToShow}
          setOverlayVisible={setShowOverlay} />}
      <h1 style={{
        fontSize: "3rem",
        fontColor: "#bbb"
      }}>BookFest!</h1>
      <p style={{
        fontSize: "2rem",
        fontColor: "#bbb"
      }}
      >Your best online plug for books</p>
      <div
        style={{
          display: "grid",
          gridAutoColumns: "rows",
          gridTemplateColumns: "1fr 1fr"
        }}>
        <div>
          <div
            style={{
              background: "white",
              margin: "1.5rem",
              padding: "1.5rem",
              justifyItems: "center",
              borderRadius: "1rem",
              boxShadow: "0 5px 10px #bbbbbb60"
            }}>
            <h3>
              Explore Our Collection
              </h3>
            <ul style={{
              textAlign: "left",
              listStyle: 'none',
              padding: "0",
              margin: "0"
            }}>
              <BookListItem
                setDetailsToShow={setDetailsToShow}
                setOverlayVisible={setShowOverlay}
                author="Charles Dickens"
                title="Oliver twist"
                authorId="444"
                bookId="something"
              />

              <BookListItem
                setDetailsToShow={setDetailsToShow}
                setOverlayVisible={setShowOverlay}
                author="Charles Dickens"
                title="Oliver twist"
                authorId="444"
                bookId="something"
              />

              <BookListItem
                setDetailsToShow={setDetailsToShow}
                setOverlayVisible={setShowOverlay}
                author="Charles Dickens"
                title="Oliver twist"
                authorId="444"
                bookId="something"
              />

            </ul>
          </div>
        </div>
        <div>
          <div
            style={{
              background: "pink",
              margin: "1.5rem",
              padding: "1.5rem",
              justifyItems: "center",
              borderRadius: "1rem",
              boxShadow: "0 5px 5px #bbbbbb60"
            }}>
            <h3>Add New Book</h3>
            <div style={{ textAlign: "left" }}>
              <span style={{ fontWeight: "bold" }}>Title</span>
              <input type="text" style={{
                padding: "4px",
                borderRadius: "4px",
                margin: "0.3rem",
              }} />
              <span style={{ fontWeight: "bold" }}>Title</span>
              <input type="text" style={{
                padding: "4px",
                borderRadius: "4px",
                margin: "0.3rem",
              }}
              />
              <span style={{ fontWeight: "bold" }}>Author</span>
              <input type="text" style={{
                padding: "4px",
                borderRadius: "4px",
                margin: "0.3rem",
              }} />
            </div>
            <div style={{
              width: "100%", textAlign: "center"
            }}>
              <p
                style={{
                  width: "30%",
                  background: "green",
                  color: "white",
                  margin: "10px auto",
                  padding: "0.5rem 1rem",
                  borderRadius: "1rem",
                }}>Create Book Listing</p>
            </div>

            <p style={{
              fontSize: "1.2rem",
              fontColor: "#bbbbbb",
              textAlign: "left"
            }}
            >
              Books on Our Shelves
            </p>
            <h3>Add New Author</h3>
            <div style={{ textAlign: "left" }}>
              <span style={{ fontWeight: "bold" }}>Name</span>
              <input type="text" style={{
                padding: "4px",
                borderRadius: "4px",
                margin: "0.3rem",
              }} />
              <span style={{ fontWeight: "bold" }}>Age</span>
              <input type="text" style={{
                padding: "4px",
                borderRadius: "4px",
                margin: "0.3rem",
              }} />
            </div>
            <div style={{
              width: "100%", textAlign: "center"
            }}>
              <p
                style={{
                  width: "30%",
                  background: "green",
                  color: "white",
                  margin: "10px auto",
                  padding: "0.5rem 1rem",
                  borderRadius: "1rem",
                }}>Create New Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function BookListItem(props) {

  const handleClickAuthor = (bookId) => {
    //fetch author details
    props.setDetailsToShow({ type: AUTHOR, details: {} });
    props.setOverlayVisible(true);
  }

  const handleClickBook = (bookId) => {
    //set book details 
    props.setDetailsToShow({ type: BOOK, details: {} });
    props.setOverlayVisible(true)
  }

  return (
    <li style={{
      margin: "1rem",
      background: "whitesmoke",
      border: "1px solid pink",
      padding: "1rem",
      borderRadius: "0.5rem",
    }}>
      <p>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>Title: </span>
        <span
          onClick={() => {
            handleClickBook(props.bookId);
          }}
          style={{
            padding: "0.2rem 2.5rem",
            background: "green",
            color: "whitesmoke",
            borderRadius: "1rem",
            boxShadow: "0 0 15px #00000050",
          }}> {props.title}</span>
      </p>
      <p>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>Author: </span>
        <span
          onClick={() => {
            handleClickAuthor(props.authorId);
          }}
          style={{
            padding: "0.2rem 2.5rem",
            background: "green",
            color: "whitesmoke",
            borderRadius: "1rem",
            boxShadow: "0 0 15px #00000050",
          }}> {props.author}</span>
      </p>
    </li>
  )
}


function OverlayComponent(props) {
  return (
    <div style={{
      background: "#00000070",
      width: "100%",
      minHeight: "100vh",
      height: "100%",
      position: 'fixed',
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      zIndex: 200,
    }}>
      <div style={{
        width: "70%",
        padding: "2rem",
        height: "auto",
        maxHeight: "70%",
        background: "whitesmoke",
        borderRadius: "2rem",
        zIndex: 300,
        overflowY: "scroll",
      }}>
        <div style={{
        }}>
          {props.detailsToShow === BOOK ?
            (<ShowBookDetails />) : (<ShowAuthorDetails />)}
          <div style={{
            width: "100%", textAlign: "center"
          }}>
            <p onClick={() => { props.setOverlayVisible(false) }}
              style={{
                width: "30%",
                background: "green",
                color: "white",
                margin: "10px auto",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
              }}>Close Details Page</p>
          </div>
        </div>
      </div>
    </div>
  )
}


function ShowAuthorDetails(props) {
  return (
    <div>
      <h2 style={{ color: "brown" }}>
        Author Details
          </h2>
      <h4>Author Name : <span>Kiyosaki Nomunda</span></h4>
      <h4>Author Age : <span>77</span></h4>
      <h4 style={{ color: "brown" }}>All Books By This Author </h4>
      <ul style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        <li style={{
          width: "60%",
          paddingTop: "15px",
          margin: "7px auto",
          border: "1px solid brown",
          borderRadius: "1rem",
          background: "#bbbbbb80",
        }}><b>Book Title :</b> <span>Kiyosaki Nomunda</span> <p><b>Book Genre:</b> Kamondo</p>
        </li>

        <li style={{
          width: "60%",
          paddingTop: "15px",
          margin: "7px auto",
          border: "1px solid brown",
          borderRadius: "1rem",
          background: "#bbbbbb80",
        }}><b>Book Title :</b> <span>Kiyosaki Nomunda</span> <p><b>Book Genre:</b> Kamondo</p>
        </li>

        <li style={{
          width: "60%",
          paddingTop: "15px",
          margin: "7px auto",
          border: "1px solid brown",
          borderRadius: "1rem",
          background: "#bbbbbb80",
        }}><b>Book Title :</b> <span>Kiyosaki Nomunda</span> <p><b>Book Genre:</b> Kamondo</p>
        </li>
      </ul>
    </div>
  )
}


function ShowBookDetails(props) {
  return (
    <div>
      <h2 style={{ color: "brown" }}>
        Book Details
      </h2>
      <h4>Book Name : <span>Kankuro Namasaki</span></h4>
      <h4>Book Genre : <span>Fan fiction</span></h4>
      <ShowAuthorDetails />
    </div>
  )
}