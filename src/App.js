import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Details from './components/Details';
import Add from './components/Add'
import Filter from './components/Filter'

const postsPerPage = 15
const Links = { 
  smallData: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}', 
  bigData: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
}

function App() {
  const [base, setBase] = useState('smallData')
  const [posts, setPosts] = useState([])
  const [loading, setLoading]= useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [details, setDetails] = useState([])
  const [addFormShow, setAddFormShow] = useState(false)
  const [order, setOrder] = useState({direction: "1",
                                      by: ['id'],
                                    })
  const [filterSubString, setFilterSubString] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(Links[base])
      setPosts(res.data)
      setLoading(false)
      localStorage.setItem('Data',JSON.stringify(res.data))
    }
    fetchPosts()
  }, [base])

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  function currentPosts() {
    if(filterSubString){
      return filteredPosts(filterSubString)
    }
    else return posts.slice(indexOfFirstPost, indexOfLastPost)
  }

  //Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  //Sort By
  function sortBy(columnTitle) {
    setOrder({ by: columnTitle,
               direction: order.direction*(-1)
    })
    posts.sort((a, b) => {
      let [x, y] = [a[columnTitle], b[columnTitle]]
      return x > y ? order.direction : x < y ? -order.direction : 0
    })
  }

  //Show/hide Details
  const showDetails = (post) => {
    if(post.description){
      setDetails(post)
    } else alert(`There is no information about ${post.firstName}`)
  }
  const closeDetails= () => setDetails([])

  //Add person Form
  const addPerson = (newPerson) => {
    let newPosts = [newPerson].concat(posts)
    setPosts(newPosts)
    setAddFormShow(!addFormShow)
  }

  //Filter
  const filteredPosts = (request) => {
    return posts.filter((post) => {
      if(post['id'].toString().includes(request)) return true
      for(let prop of ['firstName', 'lastName', 'email', 'phone']) {
        let result = post[prop].toLowerCase().includes(request)
        if(result) return true
      }
      return false
    })
  }
 
  return (
    <div className="container mt-5">
      <button type="button" className="btn btn-primary"
        data-toggle="button" aria-pressed="false"
        onClick={() => base === 'smallData'
                              ? setBase('bigData')
                              : setBase('smallData')}
      > 
        {base}
      </button>
      
      <h1 className=" text mb-3">My Table</h1>

      <button type="button" className="btn btn-primary mb-3"
        data-toggle="button" aria-pressed="false"
        onClick={() => setAddFormShow(!addFormShow)}
      >
        +Add
      </button>
      <Add showForm={addFormShow} addPerson={addPerson}/>
    
      <Filter setFilterSubString={setFilterSubString}/>

      <Posts 
        posts={currentPosts()} loading={loading} 
        showDetails={showDetails}
        sortBy={sortBy} order={order} />

      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        clickEvent={paginate}
      />
      <hr/>
      <Details details={details} closeDetails={closeDetails}/>
    </div>
  );
}

export default App;
