import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const [companyList, setCompanyList] = useState([]);

  const addCompany = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      date: date,
      status: status,
    }).then(() => {
      console.log("success");
    });
  };

  const getCompanies = () => {
    Axios.get("http://localhost:3001/companies").then((response) => {
      setCompanyList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Date (mm/dd/yyyy):</label>
        <input
          type="text"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <label>Status:</label>
        <input
          type="text"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
        />
        <button onClick={addCompany}>Add Company</button>
      </div>
      <div className="companies">
        <button onClick={getCompanies}>Show Companies</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
              {companyList.map((val, key) => {
                return (
                    <tr>
                      <td>{val.name}</td>
                      <td>{val.date}</td>
                      <td>{val.status}</td>
                    </tr>
                );
              })}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
