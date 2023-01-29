import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function Update() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [category, setCategory] = useState("")
  
      const {itemId} = useParams()
  
      useEffect(()=>{
          fetch(`http://localhost:3001/properties/${itemId}`)
          .then((r)=>r.json())
          .then((post)=>{
              setName(post.name)
              setEmail(post.email)
              setCategory(post.category)
          })
  
      },[itemId])
  
      function handleSubmit(e)
      {
       e.preventDefault()
  
       fetch(`http://localhost:3001/properties/${itemId}`,{
          method:"PATCH",
          headers: {"Content-Type":"application/json"},
          body:JSON.stringify({name: name, email:email, category: category})
       })
          .then((r)=>r.json())
          .then((post)=>{
    
          Swal.fire({
              title: 'Updated',
              text: 'Successfully updated',
              icon: 'success',
              confirmButtonText: 'Exit',
              confirmButtonColor:"green"
            })
          }
      )
  
      }
  
  
    return (
      <div className='container my-5'>
        <h3>Update {itemId}</h3>

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={name} onChange={function(e){setName(e.target.value)}} placeholder="Name here" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <textarea className="form-control"  rows="3" value={email} onChange={function(e){setEmail(e.target.value)}} placeholder='email'></textarea>
           </div>
           <div className="mb-3">
              <label className="form-label">Category</label>
              <select type="text" className="form-control" value={category} onChange={function(e){setCategory(e.target.value)}} >
                 <option value="construction">Construction</option>
                 <option value="fashion">Fashion</option>
                <option value="paintwork">Paint Work</option>
              </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">Update</button>
  
         </form>
      </div>
    )
}