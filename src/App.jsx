import { useState } from "react";
import {Container,Form,Button,ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import "./App.css";

const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;
  margin-right: 5rem;
`;
const TodoLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  margin-bottom: 0.5rem;
  list-style: none;
  border-radius: 0.5rem;
  padding: 0.25rem;
  margin: 5px 3rem;
  padding-left: 1rem;
`;

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  


  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  const deleteTodo = (value)=>{
    setTodos((oldValues) => (oldValues.filter(todo =>todo !== value)))
  }
  const completedTodo = (todo) => {
    const newTodos = todos.map((t) =>
      t === todo ? (t.startsWith("✅") ? t.substring(2) : "✅ " + t) : t
    );
    setTodos(newTodos);
    console.log(newTodos)
  };

  return (
    <>
      <Container className="px-5">
        <Title>To-Do List</Title>
        <div className="px-5 ">
          <Form className="d-flex align-items-center ">
            <Form.Group className="mb-3 w-100">
              <Form.Label className="text-center">Todo</Form.Label>
              <Form.Control
                type="text"
                value={todo}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button
              onClick={addTodo}
              className="mt-3 ms-2"
              variant="warning"
              type="button"
            >
              Add
            </Button>
          </Form>
        </div>
        <ListGroup as="ul">
          {todos.map((todo, index) => (
            <TodoLi 
            key={index} 
            style={{textDecoration: todo.startsWith("✅") ? "line-through" : "none",}}>
              {todo}
              <div>
                <Button onClick={() => completedTodo(todo)} variant="success" className="me-2" >
                  ✓
                </Button>
                <Button onClick={() => deleteTodo(todo)} variant="danger">X</Button>
              </div>
            </TodoLi>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default App;
