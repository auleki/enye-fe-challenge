import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { fetchUsers } from "../services/operations";
import UserEntry from '../components/UserEntry'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'

const ProfileList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)
  
  useEffect(() => {
    const retrieveUsers = async () => {
      try {
        setLoading(true)
        const { data } = await fetchUsers()
        setUsers(data.records.profiles)        
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    retrieveUsers()
  }, [])

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  console.log(users)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <Navbar/>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      First Name
              </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Name
              </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
              </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
              </th>

              <th scope="col" className="ml-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      URL
              </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    { currentUsers.map((user, i) => <UserEntry key={i} user={user} />) }
                </tbody>
                <Pagination 
                  totalUsers={users.length}
                  usersPerPage={usersPerPage}
                  paginate={paginate}
                  />
              </table>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default ProfileList