import React from 'react';


const Pagination = ({ postsPerPage, totalPosts, clickEvent, currentPage }) =>{
  
  const last = Math.ceil(totalPosts / postsPerPage)
  const delta = 4
  let range = []

  for(let i = Math.max(2, currentPage - delta);
      i <= Math.min(last - 1, currentPage + delta);
      i++) {
    range.push(i)
  }

  if (currentPage - delta > 2) {
    range.unshift("...")
  }
  if (currentPage + delta < last - 1) {
    range.push("...")
  }

  range.unshift(1)
  range.push(last)
 
  return(
    <section className="pagination">
      {range.map((i, index) => {return (
        !isNaN(i) ?
        <button
          value={i}
          key={index}
          onClick={() => clickEvent(i)}
          className={currentPage === i ? "active" : ""}
        >{i}</button>
        : <span key={index}>{i}</span>
      )
      })}
    </section>
  )
};
export default Pagination;