import { Card, Grid, Label } from "semantic-ui-react"
import "../styles/Book.scss"

const Book = ({ data }) => {
  const extLink = data.volumeInfo.infoLink
  const image = data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : null
  const title = data.volumeInfo.title
  const authors = data.volumeInfo.authors || []
  const desc = data.volumeInfo.description ? data.volumeInfo.description.substring(0, 150) : ""
  const categories = data.volumeInfo.categories || []

  return (
    <Grid.Column className="book-column">
      <Card
        image={image}
        header={title}
        meta={authors.length > 0 && authors.join(", ")}
        description={desc.length === 150 && `${desc}...`}
        extra={
          categories.length > 0 &&
          categories.map((c, i) => <Label key={i} tag content={c} color="blue" />)
        }
        fluid
        raised
        color="blue"
        link
        href={extLink}
        target="_blank"
        className="book-card"
      />
    </Grid.Column>
  )
}

export default Book
