import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/proj1.jpg";
import project2 from "../images/proj2.jpg";
import project3 from "../images/proj3.jpg";
import project4 from "../images/proj4.jpg";
import project5 from "../images/proj5.jpg";
import project6 from "../images/proj6.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 300,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Tic-Tac-Toe
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Implemented minimax algorithm with alpha-beta pruning to make
                  an unbeatable Tic Tac Toe AI in Javascript. Touch selection is
                  enabled and so this game can be played on all devices.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/sketches/4E4N4pSMA"
                target="_blank"
              >
                Code
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/present/4E4N4pSMA"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Snake Game
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used p5js: an online JavaScript framework and object
                  orientated Programming to code the Snake Game. Snake Game is
                  an older classic video game which was first created in the
                  70s.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/sketches/BLeflU9gq"
                target="_blank"
              >
                Code
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/present/BLeflU9gq"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  A* Visualization
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This program randomly sets up a start node and an end node and
                  many blocks. Then it uses the A* search algorithm to find a
                  path between the start and end nodes.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/sketches/EwyuP1Prf"
                target="_blank"
              >
                Code
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/present/EwyuP1Prf"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Sudoku Solver
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used the backtracking algorithm to solve Sudoku puzzles in
                  python. If the input board is solvable then a solution from
                  the algorithm is guaranteed.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/satwikgoyal/SudokuSolver"
                target="_blank"
              >
                Code
              </Button>
              <Button size="small" color="primary">
                Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 5"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  DFS Visualization
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This program randomly sets up a start node and an end node and
                  many blocks. Then it uses the DFS algorithm to find a path
                  between the start and end nodes.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/sketches/MgFKlHhJl"
                target="_blank"
              >
                Code
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/present/MgFKlHhJl"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 6 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 6"
                height="140"
                image={project6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  BFS Visualization
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This program randomly sets up a start node and an end node and
                  many blocks. Then it uses the BFS algorithm to find a path
                  between the start and end nodes.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/sketches/bCzatdyNd"
                target="_blank"
              >
                Code
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://editor.p5js.org/satwikgoyal/present/bCzatdyNd"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
