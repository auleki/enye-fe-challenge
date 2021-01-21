import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TestPosts from '../components/TestPosts'
// import bootstrap from 'bootstrap'

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
      <>
        <h2 className="fs-1 px-3">Blogs</h2>
        <TestPosts posts={posts} loading={loading}/>
      </>
  )
}

export default TestPage