import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  setCssVariables,
  renderCells,
  renderColumns,
  renderRows
} from "../renderHelpers";
import "./Grid.css";

const Grid = props => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${process.env.REACT_APP_VALID_API}`);
        setData(response.data);
        setCssVariables(response);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="grid-container plan__grid-container">
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>Something went wrong. Try again later</p>
      ) : (
        <div className="grid">
          <div className="divider"></div>
          {renderColumns(data)}

          {renderRows(data)}

          {renderCells(data)}
        </div>
      )}
    </div>
  );
};

export default Grid;
