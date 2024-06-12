import React, { useState } from "react";
import { Box, Typography, Button, Modal, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoSlice/todoSlice";
import Input from "./Ul/Input";

const Todo = ({ photo, text, title, id }) => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [newPhoto, setNewPhoto] = useState("");
  const [newText, setNewText] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [edit, setEdit] = useState(false);

  const handlerChangeTodo = () => {
    const update = todos.find((item) => item.id === id);
    setNewPhoto(update.photo);
    setNewText(update.text);
    setNewTitle(update.title);
  };

  const handlerEditChange = () => {
    setEdit((prev) => !prev);
    handlerChangeTodo();
  };

  const handlerNewPhoto = (e) => setNewPhoto(e.target.value);
  const handlerNewText = (e) => setNewText(e.target.value);
  const handlerNewTitle = (e) => setNewTitle(e.target.value);

  const handlerSubmitEdit = (e) => {
    e.preventDefault();
    const newEdit = {
      id,
      photo: newPhoto,
      text: newText,
      title: newTitle,
    };
    dispatch(editTodo(newEdit));
    setEdit(false);
  };

  const handlerDelete = () => dispatch(deleteTodo(id ));

  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 8,
        marginBottom: 2,
        width: 350,
        aspectRatio: "1/1",
      }}
    >
      <img
        src={photo}
        alt="Photo"
        style={{ width: "300px", height: "300px", borderRadius: 8 }}
      />
      <Typography variant="body1" sx={{ my: 1 }}>
        {text}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button variant="contained" color="error" onClick={handlerDelete}>
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handlerEditChange}
          >
            Edit
          </Button>
        </Grid>
      </Grid>

      <Modal open={edit} onClose={handlerEditChange}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            height:350,
            display:"flex",
            flexDirection:"column",
            gap:"20px",

          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Todo
          </Typography>
          <Input
            label="New Photo"
            onChange={handlerNewPhoto}
            value={newPhoto}
            fullWidth
          />
          <Input
            label="New Text"
            onChange={handlerNewText}
            value={newText}
            fullWidth   
          />
          <Input
            label="New Title"
            onChange={handlerNewTitle}
            value={newTitle}
            fullWidth
          />
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Button
              variant="contained"
              onClick={handlerSubmitEdit}
              sx={{ mr: 2 }}
            >
              Save
            </Button>
            <Button variant="contained" onClick={handlerEditChange}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Todo;
