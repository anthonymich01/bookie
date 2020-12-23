import { Grid } from "semantic-ui-react"
import Skeleton from "./Skeleton"

const LoadingColumn = () => (
  <>
    <Grid.Column className="book-column">
      <Skeleton />
    </Grid.Column>
    <Grid.Column className="book-column">
      <Skeleton />
    </Grid.Column>
    <Grid.Column className="book-column">
      <Skeleton />
    </Grid.Column>
    <Grid.Column className="book-column">
      <Skeleton />
    </Grid.Column>
  </>
)

export default LoadingColumn
