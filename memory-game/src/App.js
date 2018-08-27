import React, { Component } from "react";
import People from "./components/PeopleCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import people from "./people.json";
import "./App.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    people
  };

    removePerson = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const people = this.state.people.filter(person => person.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ people });
      };
    
      // Map over this.state.friends and render a FriendCard component for each friend object
      render() {
        return (
          <Wrapper>
            <Title>People List</Title>
            {this.state.people.map(person => (
              <People
                removePerson={this.removePerson}
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
