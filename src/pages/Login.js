import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navlink from "../components/Navlink";

export default function Login() {
  const [items, setItems] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/properties/")
        .then((response)=> response.json())
        .then((data)=> {
            setItems(data)
        })
    }, [])

    const [formData,setFormData] = useState({ 
      name: "",
      email:"",
      category: "paintwork",
      imageUrl: ""
      
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        postItem(formData)

        setFormData("");

    }
    

    const postItem = (property)=> {
        fetch("http://localhost:3001/properties/", 
        {
            method: "POST",
            headers: {
               "Content-Type": "application/json", 
               "Accept": "application/json",
            },
            body: JSON.stringify(property)
        })
        .then((response)=> response.json())
        .then(data =>{
            setItems([...items, data])
        })
    }

    const handleOnChange = (event)=> {
 
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }


    return(
      <div className="login">
        <div> <Navlink /> </div>
        <h1 id="form">
         HYDRATECH INOVATIONS DESIGN AND BUILD
        </h1>
        <div className="m-4">
            <form className="row" onSubmit={handleSubmit}>
                    <div className="col-4 mb-3">
                        <input name="name" onChange={handleOnChange} value={formData.name}  className="form-control form-control-sm  py-2" type="text" placeholder="Name here" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4 mb-3">
                        <input name="email" onChange={handleOnChange} value={formData.email}  className="form-control form-control-sm py-2" type="text" placeholder="Email here" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4 mb-3">
                        <select name="category" onChange={handleOnChange} value={formData.category}  className="form-control form-control-sm py-2" type="text" aria-label=".form-control-sm example">
                            <option value="construction">Construction</option>
                            <option value="fashion">Fashion</option>
                            <option value="paintwork">Paint Work</option>
                        </select>   
                    </div>
                    <div className="col-4 mb-3">
                        <input name="imageUrl" onChange={handleOnChange} value={formData.imageUrl}  className="form-control form-control-sm py-2" type="text" placeholder="Image URL" aria-label=".form-control-sm example"/>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="verify">Add Item</button>
                    </div>
            </form>
            <div className="row p-4" id="content">
                {
                    items.map((item, index)=> {
                        return(
                            <div key={index} className="card col-sm-3 m-1" style={{width: "18rem;"}}>
                                <img className="picture" src={item.imageUrl} class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Owner: {item.name}</p>
                                    <p className="card-text">Category: {item.category}</p>
                                    <p className="card-text">Email: {item.email}</p>
                                    <button className="hoverleft">
                                      <Link  to={`/update/${item.id}`}> Update</Link>
                                    </button>
                                    <button className="hover" onClick={()=> {
                                        fetch(`http://localhost:3001/properties/${item.id}`,{
                                            method:"DELETE"
                                        })
                                        .then ((res)=> res.json())
                                        .then(data=>{
                                           setItems(items.filter(array=>{
                                            return array.id !== item.id
                                           }))
                                        })
                                    }}>Delete</button>
                                    {/* <button onClick={handleDelete} className="btn btn-danger">Delete</button> */}


                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
        <div> <Footer /></div>
      </div>
    )
}