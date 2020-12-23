import React from "react"
import { getBooks } from "../api"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookList from "../components/BookList"
import "../styles/Home.scss"

const WAIT_INTERVAL = 300
const ENTER_KEY = 13
const BOOKS_LIMIT = 16

class Home extends React.Component {
  state = {
    q: "",
    booksResult: [],
    prevY: 0
  }

  timer = null

  loadingRef = React.createRef()

  componentDidMount = async () => {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    }

    this.observer = new IntersectionObserver(this.handleObserver, options)
    this.observer.observe(this.loadingRef.current)
  }

  handleObserver = async (entities, observer) => {
    const y = entities[0].boundingClientRect.y
    const { q, booksResult, prevY } = this.state
    console.log(prevY, y)
    if (prevY > y && booksResult.length > 0) {
      const offset = booksResult.length
      await this.submitSearch(q, BOOKS_LIMIT, offset)
    }
    this.setState({ prevY: y })
  }

  handleKeyDown = async (e) => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer)
      const { q } = this.state
      await this.submitSearch(q)
    }
  }

  handleInputChange = (e) => {
    clearTimeout(this.timer)
    this.setState({ q: e.target.value })
    this.timer = setTimeout(this.timerFired, WAIT_INTERVAL)
  }

  timerFired = async () => {
    const { q } = this.state
    await this.submitSearch(q)
  }

  submitSearch = async (q, limit = BOOKS_LIMIT, offset = 0) => {
    try {
      const res = await getBooks(q, limit, offset)
      if (res.status === 200) {
        if (offset === 0) {
          this.setState({ booksResult: res.data.items })
        } else {
          this.setState({ booksResult: [...this.state.booksResult, ...res.data.items] })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { q, booksResult } = this.state

    return (
      <>
        <Header />
        <p className="subtitle">Find the best books all over the world!</p>
        <div className="input-container">
          <input
            className="input-box"
            type="text"
            placeholder="Iron Man"
            value={q}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <div className="container">
          {booksResult.length > 0 && (
            <div className="box">
              <h1>Results</h1>
              <div className="books-list">
                <BookList books={booksResult} />
              </div>
            </div>
          )}
        </div>
        <div ref={this.loadingRef} />
        <Footer />
      </>
    )
  }
}

export default Home
