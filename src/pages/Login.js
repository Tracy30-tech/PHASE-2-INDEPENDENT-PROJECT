import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [items, setItems] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/properties/")
        .then((response)=> response.json())
        .then((data)=> {
            setItems(data)
        })
    }, [])

    