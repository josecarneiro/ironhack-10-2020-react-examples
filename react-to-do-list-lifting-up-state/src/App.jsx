import React from 'react';
import './App.css';

const TaskItem = props => {
  const task = props.task;
  const onRemoveTask = props.onRemoveTask;
  return (
    <li>
      {task.content}
      <button onClick={onRemoveTask}>✔️</button>
    </li>
  );
};

class TaskInput extends React.Component {
  state = {
    newTask: ''
  };

  handleFormSubmission = event => {
    event.preventDefault();
    const content = this.state.newTask;
    if (content) {
      const task = {
        id: Math.random().toString(),
        content: content
      };
      this.setState({
        newTask: ''
      });
      this.props.onTaskCreate(task);
    }
  };

  handleNewTaskChange = event => {
    const value = event.target.value;
    this.setState({
      newTask: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input
          type="text"
          placeholder="Write new task here..."
          onChange={this.handleNewTaskChange}
          value={this.state.newTask}
        />
        <button>Add to list</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    tasks: [
      { id: '123', content: 'Walk the dogs' },
      { id: '456', content: 'Shop for groceries' }
    ]
  };

  removeTask = id => {
    const tasksClone = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: tasksClone
    });
  };

  createTask = task => {
    this.setState({
      tasks: [task, ...this.state.tasks]
    });
  };

  render() {
    return (
      <div className="App">
        <TaskInput onTaskCreate={this.createTask} />
        <ul>
          {this.state.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onRemoveTask={() => this.removeTask(task.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
