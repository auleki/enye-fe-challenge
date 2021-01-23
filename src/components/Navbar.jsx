import React, { useState } from 'react'
import { JustifyRowCentered, InputField, Button, SelectField } from "../styledComponents";

const Navbar = ({ setSearch }) => {

  const [searchInput, setSearchInput] = useState("")

  const handleInput = e => setSearchInput(e.target.value)
  
    return (
      <JustifyRowCentered space>
        <div className="logo">
          <h2>USERS LOG</h2>
        </div>

        <div className="search">
          <div className="input_group">
            <InputField 
              type="text" 
              onChange={handleInput}
              value={searchInput}
              placeholder="Search"/>
            <Button>
              <i class="fas fa-search"></i>
            </Button>
          </div>         
        </div>
        <div className="filters">
            <SelectField name="gender">
              <option>Filter by Gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="PreferToSkip">Prefer To Skip</option>
            </SelectField>
            <SelectField name="paymentMethod">
              <option> Filter by Payment Method </option>
              <option value="check">Check</option>
              <option value="paypal">Paypal</option>
              <option value="money-order">Money Order</option>
            </SelectField>
          </div>
      </JustifyRowCentered>
  )
}

export default Navbar