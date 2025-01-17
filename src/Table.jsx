// components/Table.js
import React from "react";

const Table = ({ projects }) => {
  return (
    <div className="table-container">
      <table className="project-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project["s.no"]}>
              <td>{project["s.no"]}</td>
              <td>{project["percentage.funded"]}</td>
              <td>{project["amt.pledged"].toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
