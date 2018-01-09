import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.state = {
      friends,
      count: 0,
      clicked: []
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
  }

   // handleIncrement increments this.state.count by 1
   handleIncrement = (id) => {
    console.log("ID!!", id );
    console.log(this.state.clicked, "was this clicked!!");
    var index = this.state.clicked.indexOf(id);
    console.log("index Of", index);

    // if (index >= 0) {
    //   alert("You lost");
    // } else {
    //   var array = this.state.clicked;
      
    //   var newArray = array.push(id);
      
    //   this.setState({ clicked: newArray});
      
    // }

    this.setState({ count: this.state.count + 1 });
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log("this state friends!!!", this.state.friends);

    var testArray = ["a", "b", "c", "d"];

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

    var shuffledArray = shuffle(this.state.friends);
    console.log("shuffled array", shuffledArray);


    return (
      
      <div className="container-fluid">
           <Nav numClicks={this.state.count}></Nav>
          <div className="container">
            <Wrapper>
              {shuffledArray.map(friend => (
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
