import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      {todos.map((todo) => (
        <Card key={todo.id} sx={{ width: 350, marginBottom: 2, boxShadow: 4 }}>
          <Todo {...todo} />
        </Card>
      ))}
    </Box>
  );
};

export default TodoList;
