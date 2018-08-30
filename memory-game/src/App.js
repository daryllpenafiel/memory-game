import React, { Component } from "react";
import People from "./components/PeopleCard";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import Title from "./components/Title";
import people from "./people.json";
// import "./App.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    people,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }

    this.state.people.forEach(person => {
      person.count = 0;
    });

    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickPerson = id => {
    this.state.people.find((o, i) => {
      if (o.id === id) {
        if(people[i].count === 0){
          people[i].count = people[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.people.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

    // clickPerson = id => {
    //     // Filter this.state.friends for friends with an id not equal to the id being removed
    //     const people = this.state.people.filter(person => person.id !== id);
    //     // Set this.state.friends equal to the new friends array
    //     this.setState({ people });
    //   };
    
      // Map over this.state.friends and render a FriendCard component for each friend object
      render() {
        return (
          <Wrapper>
            <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>
            <Instructions />
            {this.state.people.map(person => (
              <People
                clickPerson={this.clickPerson}
                id={person.id}
                key={person.id}
                name={person.name}
                image={person.image}
              />
            ))}
          </Wrapper>
        );
      }
    }


export default App;
