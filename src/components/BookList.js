import Book from "./Book"
import { Grid } from "semantic-ui-react"

const BookList = ({ books }) => (
  <Grid columns={4} doubling>
    {books.map((book, idx) => (
      <Book key={idx} data={book} />
    ))}
  </Grid>
)

export default BookList
