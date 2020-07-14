/* 
Start here and work your way down the nested components.
Not all files in the project need code added.
Look at each file to see what props need to be passed.
*/

// Import the state hook
import React, {useState} from "react";
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from "./components/Posts/Posts"
import SearchBar from "./components/SearchBar/SearchBar"
// Import the dummyData
import dummyData from "./dummy-data"
import "./App.css";

const App = () => {
  // Create a state called 'posts' to hold the list of posts, initializing to dummyData.
  const [ posts, setPosts ] = useState(dummyData)
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [ search, setSearch ] = useState()

    // This function is passed into nested components using props, to allow them to update application state.
    const likePost = postId => {
    return (
      setPosts(posts.map(post => {
      if (postId === post.id) {
        post.likes++
      }
      return post
    })))
  };

  return (
    <div className="App">
      {/* Add SearchBar and Posts here to render them */}
      <Posts 
      likePost = { likePost }
      posts={ posts } />
    </div>
  );
};

export default App;
