import React, {useState, useEffect} from 'react'
import '../../assets/css/pages/admin.css'
import {Table, Form} from 'react-bootstrap';
import { useToasts } from "react-toast-notifications";

// API Related
const axios = require("axios");
const { baseURL } = require("../../assets/js/config");
const $http = axios.create({
  baseURL,
});

const Usertable = () => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState({ name : '', email : '', mobile : '', company : '', marked : '' })
  const { addToast } = useToasts();

  // On created
  useEffect(() => {
    loadUsers()
  }, [])
  
  const loadUsers = () => {
    let query_arr = []
    for(let key in filter){
      let val = filter[key]
      if(val){
        query_arr.push(`${key}=${encodeURIComponent(val)}`)
      }
    }
    let query_string = query_arr.join("&")
    $http.get(`user?${query_string}`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
    .then((res) => {
      if (res.data) {
        let res_users = res.data;
        setUsers(res_users)
      }
    })
    .catch((err) => {});
  }
  const updateUserStatus = (user_id) => {
    $http.put('user/approve', { user_id }, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then(res => {
      let userId_index = users.findIndex(user => user._id == user_id)
      setUsers([...users.slice(0, userId_index), res.data, ...users.slice(userId_index+1)])
      addToast("Status Updated", { appearance: "success" });
    })
  }

  const updateUser = (user_id, data) => {
    $http.put(`user/${user_id}`, data, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then(res => {
      addToast("Amount Updated", { appearance: "success" });
    })
  }

  const setUserRow = (new_val, ind, type) => {
    let new_users_arr = [...users]
    if(type === 'amount'){
      new_users_arr[ind].subscription_amount = new_val
    }else if(type === 'mark'){
      new_users_arr[ind].marked = new_val
    }
    setUsers(new_users_arr) 
  }

  const updateFilter = (key, val) => {
    let new_filter = {...filter}
    new_filter[key] = val
    setFilter(new_filter)
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <Form.Group className="mb-3">
            <Form.Label>Search By Name</Form.Label>
            <Form.Control value={filter.name} onChange={(e) => {updateFilter('name', e.target.value)}} placeholder="Search by name" />
          </Form.Group>
        </div>
        <div className="col-sm-3">
          <Form.Group className="mb-3">
            <Form.Label>Search By Email</Form.Label>
            <Form.Control value={filter.email} onChange={(e) => {updateFilter('email', e.target.value)}} placeholder="Search by email" />
          </Form.Group>
        </div>
        <div className="col-sm-3">
          <Form.Group className="mb-3">
            <Form.Label>Search By Mobile/Whatsapp</Form.Label>
            <Form.Control value={filter.mobile} onChange={(e) => {updateFilter('mobile', e.target.value)}} placeholder="Search by mobile/whatsapp" />
          </Form.Group>
        </div>
        <div className="col-sm-3">
          <Form.Group className="mb-3">
            <Form.Label>Search By Company</Form.Label>
            <Form.Control value={filter.company} onChange={(e) => {updateFilter('company', e.target.value)}} placeholder="Search by company" />
          </Form.Group>
        </div>
        <div className="col-sm-3">
          <Form.Group className="mb-3">
            <Form.Label>Filter By Marked</Form.Label>
            <Form.Control as="select" defaultValue={filter.marked} onChange={(e) => {updateFilter('marked', e.target.value)}} placeholder="Filter by Marked">
              <option value="">All</option>
              <option value="true">Marked</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div className="col-sm-3">
          <Form.Group className="mb-3">
            <button onClick={() => loadUsers()} className="btn btn-primary">Search</button>
          </Form.Group>
        </div>
      </div>
      <Table responsive striped bordered hover>
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Whatsapp</th>
            <th>Email</th>
            <th>Company</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, user_index) => (
            <tr style={{backgroundColor : (user.is_approved ? '#9bff9b' : '#fb6f6f')}} key={user._id}>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.whatsapp}</td>
              <td>{user.email}</td>
              <td style={{backgroundColor : (user.marked) ? '#ffffa8' : 'transparent'}}>{user.company}</td>
              <td>
                <input className="form-control" value={user.subscription_amount} onChange={(e) => setUserRow(e.target.value, user_index, 'amount')} />
                <Form.Check 
                  label={`Mark`}
                  checked={user.marked ? true : false}
                  onChange={() => setUserRow(!user.marked, user_index, 'mark')}
                />
                <button onClick={() => updateUser(user._id, {subscription_amount : user.subscription_amount, marked : user.marked })} className="btn btn-primary btn-sm">Update</button>
              </td>
              <td>
                { user.is_approved ? 
                  <button onClick={() => updateUserStatus(user._id)} className="btn btn-danger">Disable</button>
                 : <button onClick={() => updateUserStatus(user._id)} className="btn btn-success">Approve</button>
               }  
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5>Total Amount: ₹{users.reduce((sum, row) => { return sum + (row.subscription_amount ? parseFloat(row.subscription_amount) : 0)}, 0)}</h5>
    </div>
  );
}

export default Usertable;
