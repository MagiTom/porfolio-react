import React from "react";
import "./EmploymentTable.scss";

interface EmploymentData {
  date: string;
  years: number;
  company: string;
  position: string;
  stack: string;
}

const EmploymentTable: React.FC = () => {
  const data: EmploymentData[] = [
    {
      date: "2015 - 2020",
      years: 5,
      company: "Company A",
      position: "Developer",
      stack: "Angular",
    },
    {
      date: "2015 - 2020",
      years: 10,
      company: "Company B",
      position: "Manager",
      stack: "Angular",
    },
    {
      date: "2015 - 2020",
      years: 3,
      company: "Company C",
      position: "Designer",
      stack: "Angular",
    },
  ];

  return (
    <table className="table">
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="table_years">
              {row.date} <br />
              <span>{row.years} years</span>{" "}
            </td>
            {/* <td></td> */}
            <td className="table_company"><p>{row.company}</p><div className="table_position"><p>{row.position}</p><p>{row.stack}</p></div></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmploymentTable;
