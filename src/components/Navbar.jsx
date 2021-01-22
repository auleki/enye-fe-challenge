import React from 'react'
import { JustifyRowCentered, InputField, Button } from "../styledComponents";

const Navbar = () => {
    
    return (
      <JustifyRowCentered space>
        <div className="logo">
          <h2>USERS LOG</h2>
        </div>

        <div className="search">
          <div className="input_group">
            <InputField type="text" placeholder="Search"/>
            <Button>
              <i class="fas fa-search"></i>
            </Button>
          </div>         
        </div>
        <div className="filters">
            <select name="gender">
              <option>- Select a gender -</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="PreferToSkip">Prefer To Skip</option>
            </select>
            <select name="paymentMethod">
              <option>- Select payment method -</option>
              <option value="check">Check</option>
              <option value="paypal">Paypal</option>
              <option value="money-order">Money Order</option>
            </select>
          </div>
      </JustifyRowCentered>
  )
}

export default Navbar