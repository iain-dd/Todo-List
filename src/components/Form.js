import React from "react";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  setInputTime,
  inputTime,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const inputTimeHandler = (e) => {
    setInputTime(e.target.value);
  };

  const sumbitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        time: inputTime,
        reminder: reminderTime,
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  var today = new Date();
  var time = today.getHours() + 1 + ":" + today.getMinutes();
  return (
    <form>
      <table>
        <tr>
          <table>
            <tr>
              <td>Task:</td>
              <td>
                <input
                  value={inputText}
                  onChange={inputTextHandler}
                  type="text"
                  className="todo-input"
                />

                <button
                  onClick={sumbitTodoHandler}
                  className="todo-button"
                  type="submit"
                >
                  <i className="fas fa-plus-square"></i>
                </button>
              </td>
              <td>
                <div className="select">
                  <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                  >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                  </select>
                </div>
              </td>
            </tr>
          </table>
        </tr>
        <tr>
          <table>
            <tr>
              <td>Complete by:</td>
              <td>
                <input
                  type="time"
                  value={inputTime}
                  placeholder={time}
                  className="todo-input"
                  onChange={inputTimeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>Reminder:</td>
              <td>
                <div className="select">
                  <select
                    onChange={statusHandler}
                    name={reminderTime}
                    className="filter-todo"
                  >
                    <option value="15">15 Minutes</option>
                    <option value="30">30 Minutes</option>
                    <option value="45">45 Minutes</option>
                  </select>
                </div>
              </td>
            </tr>
          </table>
        </tr>
      </table>
    </form>
  );
};

export default Form;
