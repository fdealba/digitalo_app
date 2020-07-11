import React, { Component, Fragment } from 'react';
import { TasksContainer } from './Tasks.module.scss';
import Table from '../../components/Table/Table';

const firstNames = ["jane", "john", "alex"];
const lastName = ["smith", "jones"];

const tableData = Array(100)
  .fill()
  .map(a => ({
    date: firstNames[Math.floor(Math.random() * firstNames.length)],
    title: firstNames[Math.floor(Math.random() * firstNames.length)],
    description: lastName[Math.floor(Math.random() * lastName.length)],
    age: Math.ceil(75 * Math.random())
  }));

  const tableColumns = [
    {
      Header: 'Date',
      accessor: "date",
      filter: "text",
      width: "10%"
    },
    {
      Header: "Title",
      accessor: "title",
      filter: "text",
      width: "20%"
    },
    {
      Header: "description",
      accessor: "description",
      filter: "text",
      width: "70%"
    }
  ];

class Tasks extends Component {
  render () {
    return (
      <div className={TasksContainer}>
        <h2>Tasks</h2>
        <Table
          data={tableData}
          columns={tableColumns}
          />
      </div>
    )
  }
}

export default Tasks;
