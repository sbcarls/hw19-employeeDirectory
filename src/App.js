import './App.css';
import Table from "./Table/Table"
import API from "./utils/API"
import React from "react"

function App() {
  const [users,setUsers]=React.useState([])
  React.useEffect(() => {
    getUsers()
  },[])
  const getUsers = () => {
    API.getUsers().then((userObj) => {
      console.log(userObj);
      setUsers(userObj.data.results)

    })
  }
  return (
    <div className="App">
     <Table users={ users }/>
    </div>
  );
}

export default App;
