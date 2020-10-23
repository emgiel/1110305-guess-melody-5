import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import AuthScreen from "../auth-screen/auth-screen";
import WinScreen from "../win-screen/win-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {

  const {errorsCount, questions} = props;
  const [firstQ, secondQ] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render = {({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />)}
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/result">
          <WinScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen
            question={secondQ}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            question={firstQ}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/game">
          <GameScreen
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
