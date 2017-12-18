import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };

   // handleIncrement increments this.state.count by 1
   handleIncrement = () => {
    
    this.setState({ count: this.state.count + 1 });
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <div className="container-fluid">
           <Nav numClicks={this.state.count}></Nav>
          <div className="container">
            <Wrapper>
              {this.state.friends.map(friend => (
                  <FriendCard
                    key={friend.id}
                    handleIncrement={this.handleIncrement}
                    removeFriend={this.removeFriend}
                    id={friend.id}
                    image={friend.image} />
                    )
                  )
              };
            </Wrapper>
          </div>
        
      </div>
    );
  }
}

export default App;
