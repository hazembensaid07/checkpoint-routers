import React from "react";
import { Card, Button } from "react-bootstrap";
import MovieRating from "../Rating/Rating";
import ModalAddMovie from "../AddMovie/AddMovie";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, addCard, AddMovie }) => {
  return addCard ? (
    <Card className="movieCard">
      <Card.Body>
        <Card.Title className="addMovieBtn">
          <ModalAddMovie AddMovie={AddMovie} />
        </Card.Title>
      </Card.Body>
    </Card>
  ) : (
    <Card className="movieCard">
      <Card.Img variant="top" src={movie.img} />
      <Card.Body>
        <Card.Title className="movieTitle">{movie.title}</Card.Title>
        <MovieRating filterRate={false} movieRating={movie.rating} />
        <br />
        <Link to={{ pathname: `/movie`, state: { movie: movie } }}>
          <Button variant="outline-danger">Discover Movie </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
