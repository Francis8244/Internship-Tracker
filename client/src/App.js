import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const [nameTwo, updateName] = useState("");
  const [statusTwo, updateStatus] = useState("");

  const [companies, setCompanyList] = useState([]);
  const [internships, setInternships] = useState([]);

  const addCompany = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      date: date,
      status: status,
    });
  };

  const getCompanies = () => {
    Axios.get("http://localhost:3001/companies").then((response) => {
      setCompanyList(response.data);
    });
  };

  const updateCompany = () => {
    Axios.post("http://localhost:3001/update", {
      name: nameTwo,
      status: statusTwo,
    });
  };

  const totalInternships = () => {
    Axios.get("http://localhost:3001/total").then((response) => {
      setInternships(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <h1 className="instruction">Enter in a new internship:</h1>
        <label className="name">Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label className="date">Date (mm/dd/yyyy):</label>
        <input
          type="text"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <label className="status">Status:</label>
        <input
          type="text"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
        />
        <button onClick={addCompany}>Add Company</button>
        <button onClick={getCompanies}>Show Companies</button>
      </div>
      <div className="companies">
        <table className="data">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((val, key) => {
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
      <div className="update">
        <h1>Update the status of an internship:</h1>
        <label className="name">Name:</label>
        <input
          type="text"
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
        <label className="status">Status:</label>
        <input
          type="text"
          onChange={(event) => {
            updateStatus(event.target.value);
          }}
        />
        <button onClick={updateCompany}>Update Company</button>
      </div>
      <div className="total">
        <h1>Display the total number of internships:</h1>
        <button onClick={totalInternships}>Display Internships</button>
          {internships.map((val, key) => {
            return (
              <td className="size">Total internships applied to: {val.total}</td>
            );
          })}
      </div>
    </div>
  );
}

export default App;
