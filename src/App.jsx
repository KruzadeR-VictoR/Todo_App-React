import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [IsAdd, setIsAdd] = useState(false);
  const [Id, setId] = useState(0);

  const [Todo, setTodo] = useState([]);
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [Date, setDate] = useState();

  const handleForm = () => {
    if (IsAdd === false) setIsAdd((prev) => !prev);
    else return;
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();
    console.log(Date().toLocaleString());
    if (IsAdd === true) {
      setIsAdd(false);
    }
    setTodo({
      id: `${Id}`,
      title: `${Title}`,
      description: `${Description}`,
      date: `${Date}`,
    });
  };

  // get the current date

  const dateNow = new Date();
  // const Current=dateNow
  console.log(dateNow);

  useEffect(() => {
    console.log(Todo);
    setId(Id + 1);
    // setTitle("");
    // setDescription("");
    // setDate("");
  }, [Todo]);

  return (
    <>
      <section className="App">
        {/* logo  */}
        <div className="logo">
          <h1>Todo App</h1>
        </div>
        {/* Add a Todo  */}
        <button className="addTodo" onClick={handleForm}>
          {" "}
          + Todo
        </button>
        {/* My Todos  */}
        <div className="All-Todos">
          <h1>My Todos</h1>
          <div className="Todos">
            <div className="Todo-card">
              <h1 className="heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                omnis?
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum eaque exercitationem officiis minus voluptates
                distinctio est, vitae maxime explicabo odit voluptatum quisquam
                quam? Voluptas!
              </p>
              <div className="created">
                <span>Created at : </span>
                <span className="time"></span>
              </div>
            </div>
            <div className="Todo-card">
              <h1 className="heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                omnis?
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum eaque exercitationem officiis minus voluptates
                distinctio est, vitae maxime explicabo odit voluptatum quisquam
                quam? Voluptas!
              </p>
              <div className="created">
                <span>Created at : </span>
                <span className="time"></span>
              </div>
            </div>
            <div className="Todo-card">
              <h1 className="heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                omnis?
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum eaque exercitationem officiis minus voluptates
                distinctio est, vitae maxime explicabo odit voluptatum quisquam
                quam? Voluptas!
              </p>
              <div className="created">
                <span>Created at : </span>
                <span className="time"></span>
              </div>
            </div>
            <div className="Todo-card">
              <h1 className="heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                omnis?
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum eaque exercitationem officiis minus voluptates
                distinctio est, vitae maxime explicabo odit voluptatum quisquam
                quam? Voluptas!
              </p>
              <div className="created">
                <span>Created at : </span>
                <span className="time"></span>
              </div>
            </div>
            <div className="Todo-card">
              <h1 className="heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                omnis?
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate rerum eaque exercitationem officiis minus voluptates
                distinctio est, vitae maxime explicabo odit voluptatum quisquam
                quam? Voluptas!
              </p>
              <div className="created">
                <span>Created at : </span>
                <span className="time"></span>
              </div>
            </div>
          </div>
        </div>
        {/* add Todo Form  */}
        <form className={IsAdd ? "Todo-Form activeForm" : "Todo-Form"}>
          <h1 className="create-heading">Create a new Todo</h1>
          <label htmlFor="heading"></label>
          <input
            type="text"
            name="title"
            id="heading"
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
            placeholder="Description for your Todo"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="createdTime" className="createdFor">
            <span> Remind me on</span>
            <div>
              <input
                type="datetime-local"
                name=""
                id="time"
                value={Date ? Date : ""}
                onChange={(e) => setDate(e.target.value)}
              />
              <span> ( optional )</span>
            </div>
          </label>
          <button type="Submit" className="add" onClick={handleCreateTodo}>
            ADD
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
