import { useEffect, useState } from "react";
import closeBtn from "./assets/close.svg";
import close from "./assets/cardClose.svg";
import "./App.css";

function App() {
  const [IsAdd, setIsAdd] = useState(false);

  const [Todo, setTodo] = useState([
    {
      title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
      suscipit!`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
      officiis totam dolores quia earum facere voluptatibus nihil
      perspiciatis nulla expedita?`,
    },
    {
      title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
      suscipit!`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
      officiis totam dolores quia earum facere voluptatibus nihil
      perspiciatis nulla expedita?`,
    },
  ]);
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();

  // toggles the todo form
  const handleForm = () => {
    if (IsAdd === false) setIsAdd((prev) => !prev);
  };

  // toggles the todo form
  const handleClose = () => {
    if (IsAdd === true) {
      setIsAdd(false);
    }
  };

  // close the todo card
  const handleCardClose = (task) => {
    console.log(task);
    setTodo(
      Todo.filter((item) => {
        return item !== task;
      })
    );
  };
  // handles form data on submit
  const handleCreateTodo = (e) => {
    if (Title == "" || Description == "") {
      alert("Please fill the Todo Form");
    } else {
      e.preventDefault();
      if (IsAdd === true) {
        setIsAdd(false);
      }

      setTodo([
        ...Todo,
        {
          title: Title,
          description: Description,
        },
      ]);
    }
  };

  useEffect(() => {
    setTitle("");
    setDescription("");
  }, [Todo]);

  return (
    <>
      <section className={IsAdd ? "App overlay" : "App"}>
        {/* logo  */}
        <div className="logo">
          <h1>Todo App</h1>
        </div>
        {/* Add a Todo  */}
        <button className="addTodo" onClick={handleForm}>
          + Todo
        </button>
        {/* My Todos  */}
        <div className="All-Todos">
          <h1>My Todos</h1>
          <div className="Todos">
            {Todo.length === 0 ? (
              <h1 className="noTodos">No Todos available</h1>
            ) : (
              Todo?.map((task, index) => (
                <div className="Todo-card" key={index}>
                  <h1 className="heading">{task.title}</h1>
                  <p className="description">{task.description}</p>
                  <button
                    className="close-card"
                    onClick={() => handleCardClose(task)}
                  >
                    <img src={close} alt="close card" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        {/* <h1>{Todo}</h1> */}
        {/* add Todo Form  */}
        <form className={IsAdd ? "Todo-Form activeForm" : "Todo-Form"}>
          <h1 className="create-heading">Create a new Todo</h1>
          <label htmlFor="heading"></label>
          <input
            type="text"
            name="title"
            id="heading"
            value={IsAdd ? Title : ""}
            placeholder="Title / heading"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description"></label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            maxLength="100%"
            value={IsAdd ? Description : ""}
            placeholder="Description for your Todo"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="Submit" className="add" onClick={handleCreateTodo}>
            ADD
          </button>
          <button className="close" onClick={handleClose}>
            <img src={closeBtn} alt="Close Button" />
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
