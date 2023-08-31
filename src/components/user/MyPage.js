import "../../assets/css/user/mypage.css";

import { API } from "../../constants";

import React, { useState, useEffect } from "react";
import axios from "axios";

function MyPage() {
  const [rowData, setRowData] = useState([]);
  const [sum, setSum] = useState(0); // total score of user

  useEffect(() => {
    initial();
  }, []);

  const initial = async () => {
    if (localStorage.getItem("name") === null) {
      window.location.href = "/user/signin";
    }
    var email = localStorage.getItem("email");
    const response = await axios.post(`${API}/api/users/history`, {
      email: email,
    });
    setRowData(response.data.data);
    setSum(response.data.sum);
  };

  const tableContents = rowData.map((index, num) => {
    return (
      // eslint-disable-next-line jsx-a11y/scope
      <tr scope="row">
        <td>
          {new Date(parseInt(index.time)).getMonth() +
            1 +
            "/" +
            new Date(parseInt(index.time)).getDate() +
            "/" +
            new Date(parseInt(index.time)).getFullYear()}
        </td>
        <td>{index.score}</td>
      </tr>
    );
  });

  return (
    <div className="mypage-content">
      <div className="total-score">
        <p>Total Score : {sum}</p>
      </div>
      <div className="table-container">
        <table className="table custom-table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>{tableContents}</tbody>
        </table>
        <div></div>
      </div>
    </div>
  );
}

export default MyPage;
