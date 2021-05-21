import React, { useState } from "react";
import { DateTimePicker } from "react-rainbow-components";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  setInputTime,
  inputTime,
  setSelectedDate,
  selectedDate,
  setReminderDate,
  reminderDate,
}) => {
  var reminderTime;
  var time;
  var dueDates;
  const dateChangeHandler = (date) => {
    setSelectedDate(date);
  };

  const dateReminderHandler = (date) => {
    setReminderDate(date);
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const sumbitTodoHandler = (e) => {
    e.preventDefault();
    selectedDate = selectedDate.toLocaleString("en-CA");
    reminderDate = reminderDate.toLocaleString("en-CA");

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        dueDate: selectedDate,
        reminderDate: reminderDate,
      },
    ]);
    setInputText("");
    setSelectedDate(new Date());
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const reminderTimeHandler = (e) => {
    reminderTime = e.target.value;
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
              <td>
                <DateTimePicker
                  label="complete By"
                  minDate={new Date()}
                  value={selectedDate}
                  className="todo-input"
                  onChange={dateChangeHandler}
                  placeholder="enter due date"
                />
              </td>
              <td>
                <DateTimePicker
                  label="Set Reminder"
                  minDate={new Date()}
                  maxDate={selectedDate}
                  value={reminderDate}
                  className="todo-input"
                  onChange={dateReminderHandler}
                  placeholder="enter reminder date"
                />
              </td>
            </tr>
          </table>
        </tr>
      </table>
    </form>
  );
};

export default Form;
