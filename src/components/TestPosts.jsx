import React from 'react'

const TestPosts = ({ posts, loading }) => {
  if (loading) return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
    
    return (
    <div>
      <ul className="list-group mb-4">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestPosts