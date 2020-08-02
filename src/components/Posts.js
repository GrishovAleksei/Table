import React from 'react'

const Posts = ({ posts, loading, sortBy, order, showDetails }) => {
  if(loading) {
    return  <div className="d-flex align-items-center">
              <strong>Loading...</strong>
              <div className="spinner-border ml-auto text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
  }

  const symbols = {
    "1":  <svg width="1em" height="1em" viewBox="0 0 16 16"
              className="bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
          </svg>,
    "-1": <svg width="1em" height="1em" viewBox="0 0 16 16" 
              className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>,
  }

  const columnNames = ["id", "firstName", "lastName", "email", "phone"]

  return (
    <table className="table table-bordered shadow p-4 mb-4 bg-white">
      <thead>
        <tr>
          {columnNames.map((columnTitle) => (
            <th key={columnTitle} 
                onClick={() => sortBy(columnTitle)}
            >
              {columnTitle}
              &nbsp;
              {(order.by === columnTitle)
                ? symbols[order.direction]
                : null
              }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index} onClick={()=> showDetails(post)}>
            <th>
              {post.id}
            </th>
            <td>
              {post.firstName}
            </td>
            <td>
              {post.lastName}
            </td>
            <td>
              {post.email}
            </td>
            <td>
              {post.phone}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Posts