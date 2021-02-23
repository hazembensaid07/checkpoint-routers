import React from "react";
import { Card, Button } from "react-bootstrap";
import MovieRating from "../Rating/Rating";
import "./Movie.css";
const Movie = ({ location, history }) => {
  const movie = location.state.movie;
  return (
    <div className="mov">
      <Card className="movieCard">
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title className="movieTitle">{movie.title}</Card.Title>
          <MovieRating filterRate={false} movieRating={movie.rating} />
          <br />
          {movie.description}
        </Card.Body>
      </Card>
      <iframe
        width={420}
        height={345}
        src={movie.trailer}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Button variant="danger" onClick={() => history.push("/")}>
        Got Back Home{" "}
      </Button>{" "}
    </div>
  );
};

export default Movie;
