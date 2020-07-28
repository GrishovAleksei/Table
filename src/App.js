import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import './App.css'


function App() {
  const [posts, setPosts] = useState([])
  const[loading, setLoading]= useState(false)
  const [currebtPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(15)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])


  return (
    <div className="container mt-5">
      <h1 className=" text-primarymb-3"></h1>
      <Posts post={posts} loading={loading}/>
    </div>
  );
}

export default App;
