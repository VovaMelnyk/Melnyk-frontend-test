import React from "react";

export const renderColumns = ({ columns }) => {
    return columns.map((el, i) => (
        <div className="column" key={el + i}>
            {el}
        </div>
    ));
};

export const renderRows = ({ cells, columns, rows }) => {
    let isFullTable = cells.length / columns.length === rows.length;
    let rowCount = Math.floor(cells.length / columns.length);

    return isFullTable
        ? rows.map((el, i) => (
              <div className="row" key={el + i}>
                  {el}
              </div>
          ))
        : rows.map((el, i) =>
              i < rowCount ? (
                  <div className="row" key={el + i}>
                      {el}
                  </div>
              ) : null
          );
};

export const renderCells = ({ cells, columns, rows }) => {
    let isFullTable = cells.length / columns.length === rows.length;
    let rowCount = Math.floor(cells.length / columns.length);
    let cellsCount = rowCount * columns.length;

    return isFullTable
        ? cells.map(el => (
              <div className="cell" key={el.id}>
                  {el.text}
              </div>
          ))
        : cells.map((el, i) =>
              i < cellsCount ? (
                  <div className="cell" key={el.id}>
                      {el.text}
                  </div>
              ) : null
          );
};

export const setCssVariables = ({ data }) => {
    document.documentElement.style.setProperty(
        "--columnsCount",
        data.columns.length
    );
    document.documentElement.style.setProperty(
        "--rowsCount",
        Math.floor(data.cells.length / data.columns.length)
    );
};
