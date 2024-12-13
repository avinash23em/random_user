import { useState,useEffect } from "react";
import axios from "axios";
import '/randomuser.css'




export default function Random(){
const[users,setUsers]=useState([]);
const[page,setpage]=useState('');
const[loading,setloading]=useState(false);

useEffect(() => {
    const fetchUsers = async () => {
      setloading(true);
      try {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=5`);
        setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching users", error);
      }
      setloading(false);
    };
    fetchUsers();
  }, [page]);
  
  return (
  <div>


<button className="load-more-button" onClick={(setpage+1)}>click for more users</button>
</div>
);
}