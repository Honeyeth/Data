import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
function App() {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() =>{
    const fetchposts = async()=> {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
        setposts(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }

    }
    fetchposts();
  },[])
  return (
    <>
      <h1 style={{textAlign: 'center', fontFamily: 'sans-serif'}}>Fetch Data</h1>
      <ul>
        {posts.map((post)=>(
         <li key={post.id}>
          <strong>{post.title}</strong>
          <P>{post.body}</P>
         </li>
        ) )}
      </ul>
    </>
  )
}

export default App
