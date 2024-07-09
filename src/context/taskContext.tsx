import { createContext, ReactNode, useState } from "react";
import uuid from 'react-native-uuid';

interface Task {
  text: string;
  checked: boolean;
  createAt: Date;
  id: string;
}

interface TaskContext {
  tasks: Task[]
  handleChangeMarkedTask: (marked: boolean, id: string) => void;
  handleDeleteTask: (id: string) => void;
  handleCreateTask: (text: string) => void;
  amountTaskMarked: number;
}

export const TaskContext = createContext({} as TaskContext)

interface TasksProviderProps {
  children: ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleChangeMarkedTask(marked: boolean, id: string) {
    const markedTask = tasks.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          checked: marked
        }
      }

      return task
    })

    setTasks(markedTask)
  }

  function handleCreateTask(text: string) {
    const createNewTask: Task = {
      checked: false,
      createAt: new Date(),
      id: uuid.v4() as string,
      text,
    }

    setTasks([...tasks, createNewTask])
  }

  function handleDeleteTask(id: string) {
    const filteredTask = tasks.filter((task) => task.id !== id)

    setTasks(filteredTask)
  }

  const amountTaskMarked = tasks.reduce((amount, task) => {
    if(task.checked) {
      amount++
    }

    return amount
  }, 0)

  return (
    <TaskContext.Provider value={{
      tasks,
      handleCreateTask,
      handleChangeMarkedTask,
      handleDeleteTask,
      amountTaskMarked
    }}>
      {children}
    </TaskContext.Provider>
  )
}