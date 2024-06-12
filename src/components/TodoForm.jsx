import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Input from "./Ul/Input";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleChangePhoto = (e) => setPhoto(e.target.value);
  const handleChangeText = (e) => setText(e.target.value);
  const handleChangeTitle = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      photo,
      text,
      title,
    };
    dispatch(addTodo(newTodo));
    setPhoto("");
    setText("");
    setTitle("");
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', p: 2, border: '1px solid #ccc', borderRadius: 8 }}>
      <Typography variant="h5" gutterBottom>Add New Todo</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              onChange={handleChangePhoto}
              value={photo}
              label="Photo"
              type="url"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              onChange={handleChangeText}
              value={text}
              label="Text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              onChange={handleChangeTitle}
              value={title}
              label="Title"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={!photo || !text || !title}
              variant="contained"
              type="submit"
              fullWidth
            >
              Add Todo
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TodoForm;
