import { Button } from "react-bootstrap";
type Props = {
  isLoading: boolean;
  totalCount: number;
  page: number;
  limit: number;
  booksLength: number;
  handleClick: () => void
}
const BooksBtn = ({isLoading, totalCount, page, limit, booksLength, handleClick }: Props) => {
  return (
    <>
      {totalCount > page * limit && !!booksLength && (
          <Button onClick={handleClick} variant="primary">
            {isLoading ? "Loading..." : "Show more"}
          </Button>
      )}
    </>
  );
};

export default BooksBtn;
