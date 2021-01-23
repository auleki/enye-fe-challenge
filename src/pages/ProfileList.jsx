import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { fetchUsers } from "../services/operations";
import UserEntry from '../components/UserEntry'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'

const usersArr = [
  {
    "FirstName": "Halle",
    "LastName": "Okuneva",
    "Gender": "Female",
    "Latitude": -38.523865,
    "Longitude": 160.35211,
    "CreditCardNumber": "6011376344202682",
    "CreditCardType": "Discover",
    "Email": "CepgdvT@vJdWfsq.org", "DomainName": "ZMXtBkE.info", "PhoneNumber": "184-361-0572", "MacAddress": "a7:53:db:df:50:46", "URL": "https://iromLbj.biz/kOUOrbJ", "UserName": "uQStqem", "LastLogin": "2016-03-09 21:26:06", "PaymentMethod": "cc"
  },
  {
    "FirstName": "Jordane", "LastName": "Lakin", "Gender": "Female", "Latitude": 78.92262, "Longitude": 130.34335, "CreditCardNumber": "6011633025088955", "CreditCardType": "Discover", "Email": "DDRuASv@ZLgNuWd.com", "DomainName": "sNYdrIf.info", "PhoneNumber": "913-105-6248", "MacAddress": "d7:81:da:6d:0a:03", "URL": "https://CYmVLvU.ru/ueooykP.html", "UserName": "EfcjjmS", "LastLogin": "1976-09-27 20:18:41", "PaymentMethod": "money order"
  },
  {
    "FirstName": "Lesley", "LastName": "Marquardt", "Gender": "Female", "Latitude": -23.758797, "Longitude": -41.334473, "CreditCardNumber": "6011174089256196", "CreditCardType": "Discover", "Email": "nDiXnKZ@LTHuQaI.biz", "DomainName": "IAiVEGX.ru", "PhoneNumber": "210-173-6489", "MacAddress": "fc:fc:f4:38:af:b1", "URL": "https://www.SsDhhcr.info/eEEVkkh", "UserName": "sjkrqRf", "LastLogin": "2016-05-09 00:38:41", "PaymentMethod": "cc"
  },
  {
    "FirstName": "Gaylord", "LastName": "Hirthe", "Gender": "Prefer to skip", "Latitude": 50.15129, "Longitude": -42.71782, "CreditCardNumber": "6011771412217059", "CreditCardType": "Discover", "Email": "ivDaTVL@IKeommG.biz", "DomainName": "plHVsax.com", "PhoneNumber": "483-765-2109", "MacAddress": "22:5e:3c:6a:41:44", "URL": "http://dbauqnd.org/WilDkeK", "UserName": "AgIaxEf", "LastLogin": "1994-02-02 22:47:27", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Frederik", "LastName": "Schneider", "Gender": "Male", "Latitude": 15.78569, "Longitude": -115.3448, "CreditCardNumber": "6011072576117111", "CreditCardType": "Discover", "Email": "vXoMhwa@CvasvwU.com", "DomainName": "BHNmJel.info", "PhoneNumber": "109-824-5136", "MacAddress": "60:3d:a3:0b:69:f4", "URL": "http://www.FRJGOGX.org/vsXESma", "UserName": "DtjIuXO", "LastLogin": "2001-10-08 19:23:06", "PaymentMethod": "cc"
  },
  {
    "FirstName": "Tiana", "LastName": "Daugherty", "Gender": "Male", "Latitude": 63.64427, "Longitude": -120.50612, "CreditCardNumber": "6011460680884732", "CreditCardType": "Discover", "Email": "gGVowYj@IjfJeIm.com", "DomainName": "uMRjhmG.ru", "PhoneNumber": "539-210-4871", "MacAddress": "40:8f:7e:b9:1c:fa", "URL": "http://JcnmDvU.net/VRRKLbb", "UserName": "qkOjCEc", "LastLogin": "1995-02-03 19:34:00", "PaymentMethod": "money order"
  },
  {
    "FirstName": "Roberta", "LastName": "Cassin", "Gender": "Female", "Latitude": -58.396378, "Longitude": -86.197205, "CreditCardNumber": "6011727433623122", "CreditCardType": "Discover", "Email": "NKebdFl@BZVaiBq.ru", "DomainName": "IlQTElQ.info", "PhoneNumber": "102-134-7986", "MacAddress": "af:1d:ee:9b:5d:34", "URL": "https://qhaNLcr.info/DugppQa.html", "UserName": "IiYLZuM", "LastLogin": "1988-09-17 01:42:37", "PaymentMethod": "paypal"
  }, {
    "FirstName": "Lonie", "LastName": "Bailey", "Gender": "Male", "Latitude": -19.590149, "Longitude": -105.06369, "CreditCardNumber": "6011628843869874", "CreditCardType": "Discover", "Email": "clFXqar@SoaOoAI.ru", "DomainName": "AMihWuA.biz", "PhoneNumber": "210-756-3918", "MacAddress": "26:6f:92:97:8d:67", "URL": "https://tgBxxxG.com/qsAwnXX.php", "UserName": "ESvcevk", "LastLogin": "1977-02-13 21:39:47", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Tracy", "LastName": "Schulist", "Gender": "Male", "Latitude": -38.813736, "Longitude": -179.42535, "CreditCardNumber": "6011308958102434", "CreditCardType": "Discover", "Email": "oAmbATy@LIEDdXX.com", "DomainName": "mHEcnsB.info", "PhoneNumber": "958-627-4310", "MacAddress": "68:2c:52:74:0a:d6", "URL": "http://uMwoRpe.info/HpZiNoQ.html", "UserName": "RcdTRFU", "LastLogin": "1987-04-04 14:55:35", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Bella", "LastName": "Johnston", "Gender": "Prefer to skip", "Latitude": 16.509552, "Longitude": 137.02194, "CreditCardNumber": "6011290551756722", "CreditCardType": "Discover", "Email": "yVcxCgr@HnIUHQW.com", "DomainName": "dLcqCkO.com", "PhoneNumber": "276-984-3101", "MacAddress": "8a:c5:77:2f:7e:cf", "URL": "https://SZHmFWe.biz/lxYBFsS", "UserName": "kLfqXqN", "LastLogin": "2017-04-04 19:40:24", "PaymentMethod": "money order"
  },
  {
    "FirstName": "Ewell", "LastName": "Wisozk", "Gender": "Female", "Latitude": -80.93735, "Longitude": 142.58609, "CreditCardNumber": "6011914457643546", "CreditCardType": "Discover", "Email": "fFFZPsU@vkwVEHX.ru", "DomainName": "BNdJAlU.net", "PhoneNumber": "743-210-6158", "MacAddress": "5d:49:60:84:93:ad", "URL": "http://www.mDdVbwJ.biz/", "UserName": "bnUTfPI", "LastLogin": "1971-04-05 22:47:48", "PaymentMethod": "check"
  },
  {
    "FirstName": "Frederick", "LastName": "Jacobs", "Gender": "Prefer to skip", "Latitude": 87.16643, "Longitude": 98.54813, "CreditCardNumber": "6011993546521547", "CreditCardType": "Discover", "Email": "ntvksOt@EMsuwQN.info", "DomainName": "cjGoXWv.net", "PhoneNumber": "831-106-9457", "MacAddress": "ed:97:12:ec:a5:39", "URL": "http://www.ETqJRgq.net/", "UserName": "AmuLJrn", "LastLogin": "2020-01-17 19:51:30", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Maxine", "LastName": "Schaden", "Gender": "Male", "Latitude": 74.042175, "Longitude": 173.06863, "CreditCardNumber": "6011574678566826", "CreditCardType": "Discover", "Email": "xiWfqWU@sucxCse.org", "DomainName": "UcFjJIb.net", "PhoneNumber": "108-432-1697", "MacAddress": "df:9a:1f:83:a7:4b", "URL": "https://AoZndXm.net/", "UserName": "BCwMhPU", "LastLogin": "1983-12-22 10:32:27", "PaymentMethod": "cc"
  },
  {
    "FirstName": "Ben", "LastName": "Purdy", "Gender": "Male", "Latitude": 88.130585, "Longitude": -48.272354, "CreditCardNumber": "6011342594120269", "CreditCardType": "Discover", "Email": "wEqrORw@SVggkxM.org", "DomainName": "OpBcCet.biz", "PhoneNumber": "109-756-8342", "MacAddress": "a3:12:cd:16:ce:e1", "URL": "https://htWjFWp.biz/", "UserName": "nVTXqIN", "LastLogin": "1988-01-07 03:09:54", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Reed", "LastName": "Jacobs", "Gender": "Male", "Latitude": 27.70768, "Longitude": -57.70807, "CreditCardNumber": "6011955412521837", "CreditCardType": "Discover", "Email": "wILNXFH@HQKFZBE.org", "DomainName": "ZFPOeMA.com", "PhoneNumber": "679-248-1310", "MacAddress": "9a:cb:74:3b:51:af", "URL": "https://nDIQSPr.ru/bSmwkgf", "UserName": "KbgIPdx", "LastLogin": "2002-04-04 04:01:14", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Antonia", "LastName": "Welch", "Gender": "Male", "Latitude": -84.41365, "Longitude": -0.18920898, "CreditCardNumber": "6011857048680975", "CreditCardType": "Discover", "Email": "lnEmHfw@VYNKeGj.info", "DomainName": "DroYmyc.com", "PhoneNumber": "324-710-1685", "MacAddress": "3b:09:c0:a1:c7:b8", "URL": "http://PeDQruC.org/SCgJllA.php", "UserName": "dOrUmkm", "LastLogin": "1997-01-21 06:02:34", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Beaulah", "LastName": "Mayert", "Gender": "Female", "Latitude": 40.73651, "Longitude": -26.286499, "CreditCardNumber": "6011872635765900", "CreditCardType": "Discover", "Email": "KQemncX@XcwnVOn.biz", "DomainName": "oNjiPZT.info", "PhoneNumber": "109-257-3618", "MacAddress": "56:85:28:3e:4a:71", "URL": "http://lBtMSnI.com/eUjyrJF.html", "UserName": "XPAoSjx", "LastLogin": "1970-01-26 05:05:47", "PaymentMethod": "paypal"
  }, {
    "FirstName": "Grant", "LastName": "Schuster", "Gender": "Female", "Latitude": 76.95566, "Longitude": 51.692673, "CreditCardNumber": "6011803638123295", "CreditCardType": "Discover", "Email": "VEWhUEv@sEtumjI.biz", "DomainName": "RJQLnPZ.org", "PhoneNumber": "104-235-9781", "MacAddress": "dc:37:56:92:5f:1b", "URL": "http://VMvLaCP.org/iMpFGBs.html", "UserName": "AZwNqMi", "LastLogin": "1994-08-25 13:18:10", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Eriberto", "LastName": "Wilkinson", "Gender": "Female", "Latitude": -8.91906, "Longitude": 18.330688, "CreditCardNumber": "6011395952800704", "CreditCardType": "Discover", "Email": "GtjXMjt@KTeNsYs.ru", "DomainName": "JjLIdDo.org", "PhoneNumber": "182-491-0365", "MacAddress": "55:2a:1c:85:f5:11", "URL": "https://kgrBXEG.org/", "UserName": "LFwfYJM", "LastLogin": "2019-02-22 18:14:11", "PaymentMethod": "money order"
  },
  {
    "FirstName": "Emanuel", "LastName": "Satterfield", "Gender": "Male", "Latitude": -55.915478, "Longitude": -76.82377, "CreditCardNumber": "6011948591477099", "CreditCardType": "Discover", "Email": "iPXZIJZ@GOuWpyk.com", "DomainName": "BhUojkU.biz", "PhoneNumber": "510-948-7263", "MacAddress": "3c:f9:48:11:94:98", "URL": "http://jLBQODD.ru/Vvbjxxq.php", "UserName": "eqTAFVC", "LastLogin": "1988-04-13 06:40:55", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Trudie", "LastName": "Treutel", "Gender": "Female", "Latitude": -3.0420837, "Longitude": 86.49866, "CreditCardNumber": "6011193810249108", "CreditCardType": "Discover", "Email": "ybNcwDG@XDTMRMc.info", "DomainName": "ipLCHey.biz", "PhoneNumber": "751-031-2984", "MacAddress": "60:e0:bc:11:c6:54", "URL": "http://www.rcchQPp.net/NgkBYRg", "UserName": "jQxlJqU", "LastLogin": "1985-03-12 14:06:03", "PaymentMethod": "money order"
  },
  {
    "FirstName": "Baylee", "LastName": "Rippin", "Gender": "Female", "Latitude": -29.55029, "Longitude": 150.8458, "CreditCardNumber": "6011573303250231", "CreditCardType": "Discover", "Email": "VPByhPT@CGeaVOp.com", "DomainName": "JnsjfqU.ru", "PhoneNumber": "491-236-8105", "MacAddress": "c7:66:41:e9:55:fc", "URL": "http://mhouZiL.com/", "UserName": "JNiKeBn", "LastLogin": "1975-04-21 22:56:32", "PaymentMethod": "cc"
  },
  {
    "FirstName": "Ada", "LastName": "Carter", "Gender": "Female", "Latitude": 62.86873, "Longitude": 133.99747, "CreditCardNumber": "6011643737187329", "CreditCardType": "Discover", "Email": "wvbKvdW@ubHkcFr.ru", "DomainName": "LcLlDDj.org", "PhoneNumber": "748-361-0159", "MacAddress": "40:f6:86:91:78:a1", "URL": "https://TYTcLIO.org/", "UserName": "vyyXgLG", "LastLogin": "1977-04-03 14:04:23", "PaymentMethod": "paypal"
  },
  {
    "FirstName": "Norbert", "LastName": "Kirlin", "Gender": "Prefer to skip", "Latitude": -63.054306, "Longitude": -47.10623, "CreditCardNumber": "6011250441374530", "CreditCardType": "Discover", "Email": "kewGARS@dFysSYl.ru", "DomainName": "RcWXDyn.com", "PhoneNumber": "586-710-3214", "MacAddress": "29:71:ad:47:e2:db", "URL": "http://www.xJLPjKF.ru/", "UserName": "dPyVGBJ", "LastLogin": "2005-07-20 07:18:24", "PaymentMethod": "check"
  },
  { "FirstName": "Josianne", "LastName": "White", "Gender": "Male", "Latitude": -1.8211212, "Longitude": 131.89474, "CreditCardNumber": "6011223470100959", "CreditCardType": "Discover", "Email": "hTZKYLq@whFSCCD.org", "DomainName": "rcPrxek.info", "PhoneNumber": "184-365-2910", "MacAddress": "f8:3b:58:bb:a0:e7", "URL": "http://RMftuBd.org/novnsYG.html", "UserName": "uXYLuQu", "LastLogin": "1997-05-19 14:29:41", "PaymentMethod": "paypal" }, {
    "FirstName": "Gwendolyn", "LastName": "Greenholt", "Gender": "Prefer to skip", "Latitude": 79.143036, "Longitude": -24.95517, "CreditCardNumber": "6011309517960365", "CreditCardType": "Discover", "Email": "MeMwTfL@HxsaJYl.com", "DomainName": "cRfuWKK.org", "PhoneNumber": "481-765-9102", "MacAddress": "c1:88:39:07:c0:ab", "URL": "http://xwfJswU.biz/eknxHQr.html", "UserName": "OHMAlMf", "LastLogin": "1985-05-08 11:23:00", "PaymentMethod": "money order"
  }
]

const ProfileList = () => {
  // const [users, setUsers] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(5)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const retrieveUsers = async () => {
      try {
        setLoading(true)
        // const { data } = await fetchUsers()
        // setUsers(data.records.profiles)
        setUsers(usersArr)
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
      <Navbar setSearch={setSearch} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Full Name
              </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Method
              </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gender
              </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Username
              </th>

                    <th scope="col" className="ml-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {/* URL */}
                      {search}
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {!loading
                    ? currentUsers.map((user, i) => <UserEntry key={i} user={user} />)
                    : <h1>Loading...</h1>
                  }
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