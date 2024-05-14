const initTodo = [
  { id: 1, content: "Saorina Mieken", editing: false },
  { id: 2, content: "Suzuka G garden Mieken", editing: false },
  { id: 3, content: "Okudo Sports Center Katsushika-ku Tokyo", editing: false },
  { id: 4, content: "Aquatic Center Tatsumi Tokyo", editing: false },
  { id: 5, content: "Tokyo Gynasium Minato-ku Tokyo", editing: false }
];

const postTodo = todo => {
  initTodo.push(todo);
  return todo;
};

const updateTodo = todo => {
  let updatedTodo = {};
  initTodo.map(_todo => {
    if(_todo.id === todo.id){
      _todo.content = todo.content;
      _todo.editing = todo.editing;
      updatedTodo = { ..._todo };
    } else {
      return _todo;
    }
  });
  return updatedTodo;
};

const deleteTodo = id => {
  let deleteIndex;
  const deleteId = initTodo.map((todo, index) => {
    if(todo.id === parseInt(id))
      deleteIndex = index;
  });
  initTodo.splice(deleteIndex, 1);
};

module.exports = { initTodo, postTodo, updateTodo, deleteTodo };

/*
  { id: 1, content: "Saorina Mieken", editing: false },
  { id: 2, content: "Suzuka G garden Mieken", editing: false },
  { id: 3, content: "Okudo Sports Center Katsushika-ku Tokyo", editing: false },
  { id: 4, content: "Aquatic Center Tatsumi Tokyo", editing: false },
  { id: 5, content: "Tokyo Gynasium Minato-ku Tokyo", editing: false }
*/