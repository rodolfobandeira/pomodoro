import React, { useState } from 'react';
import Form from './components/Form'
import List from './components/List'
import Stopwatch from './components/Stopwatch'
import { ITask } from './types/task';


function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function taskSelect(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finalizeTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(
        oldTasks => oldTasks.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        })
      )
    }
  }

  return (
    <div className="grid grid-flow-col">
      <div className="left">
        <Form setTasks={setTasks} />
        <br />
        <Stopwatch
          selected={selected}
          finalizeTask={finalizeTask}
        />
      </div>
      <div className="right col-span-8">
        <List
          tasks={tasks}
          taskSelect={taskSelect}
        />
      </div>
    </div>
  );
}


export default App;
