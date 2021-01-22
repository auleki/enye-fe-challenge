import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TestPosts from '../components/TestPosts'
import TestPagination from '../components/TestPagination'

const TestPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const { data } = await axios.get(url)
      setPosts(data)
      setLoading(false)
    }
    getPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage 
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    
    return (
      <div>
        <h2 className="mt-3 mb-3 fs-1 px-3 text-primary">Blogs</h2>
        <TestPosts posts={posts} loading={loading}/>
        <TestPagination />
      </div>
  )
}

export default TestPage