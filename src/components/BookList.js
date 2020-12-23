import Book from "./Book"
import { Grid } from "semantic-ui-react"
import LoadingColumn from "./LoadingColumn"

const BookList = ({ books, loading }) => (
  <Grid columns={4} doubling stretched>
    {books.map((book, idx) => (
      <Book key={idx} data={book} />
    ))}
    {loading && <LoadingColumn />}
  </Grid>
)

export default BookList
