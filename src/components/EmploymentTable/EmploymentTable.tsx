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
      date: "2021 - current",
      years: 3.5,
      company: "Devqube sp. z o.o.",
      position: "Front-End Developer",
      stack: "Angular",
    },
    {
      date: "2020 - 2021",
      years: 1,
      company: "NordDigital, Brenna",
      position: "PRODUCT MANAGER",
      stack: "HTML, CSS",
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
            <td className="table_company"><p>{row.company}</p><div className="table_position"><p>{row.position}</p><p>{row.stack}</p></div></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmploymentTable;
