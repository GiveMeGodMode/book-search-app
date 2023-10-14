import Card from "react-bootstrap/Card";
import { IBook } from "../../types/IBook";
import {Link} from 'react-router-dom'


const Book = ({ photoURL, authors, categories, id, title }: IBook) => {
  return (
      <Card className="book-card" style={{ width: "18rem", position: 'relative'}} >
        <Card.Img
          className="book-card__img"
          variant="top"
          src={photoURL}
          alt="photo"
        />
        <Card.Body style={{display: 'flex', alignItems: 'center'}}>
          <Card.Text className="book-card__body">
            <span className="book-card__category">{categories[0]}</span>
            <span className="book-card__title">{title.substring(0, 40) + (title.length>=40 && "..." )}</span>
            <span className="book-card__author">{authors.join(' ,')}</span>
          </Card.Text>
  
        </Card.Body>
        <Link style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}  to={`book/${id}`}/>
      </Card>
  );
};

export default Book;
