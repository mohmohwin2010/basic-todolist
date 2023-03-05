import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function DisplayToDoList() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Push your code to github", status: "Done" },
    { id: "2", title: "Email to your manager", status: "Pending" },
    { id: "3", title: "Report to senior", status: "Pending" },
  ]);

  const deleteTodo = (todo) => {
    setTodos(todos.filter((deletetodo) => deletetodo.id !== todo.id));
  };

  const editTodo = (todo) => {
    const updatedotos = todos.map((x) => {
      if (x.id === todo.id) {
        return { ...x, status: x.status === "Pending" ? "Done" : "Pending" };
      } else {
        return x;
      }
    });
    setTodos(updatedotos);
  };
  return (
    <div>
      <h3>TodoList</h3>
      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todolist) => {
            return (
              <tr>
                <td>{todolist.id}</td>
                <td>{todolist.title}</td>
                <td
                  style={{
                    color: todolist.status === "Done" ? "green" : "red",
                  }}
                >
                  {todolist.status}
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => deleteTodo(todolist)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                  <Button variant="primary" onClick={() => editTodo(todolist)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DisplayToDoList;
