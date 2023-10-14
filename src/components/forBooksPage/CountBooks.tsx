type Props = {
    totalCount: number;
}


const CountBooks = ({totalCount}: Props) => {
  return (
    <div className=" fw-bolder fs-4 mb-5">
          Found {totalCount} results
        </div>
  )
}

export default CountBooks
