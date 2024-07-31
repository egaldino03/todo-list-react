import { FormEvent, useState } from 'react'
import Logo from './components/Logo'
import styles from './App.module.css'
import Input from './components/Input'
import TodoArea from './components/TodoArea'

export default function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [todoText, setTodoText] = useState('')
  const [concluded, setConcluded] = useState(0)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTodos([...todos, todoText])
    setTodoText('')
  }

  function handleTodoDeletion(text: string) {
    setTodos(todos.filter((todo) => todo !== text))
    if (concluded > 0) {
      setConcluded(concluded - 1)
    }
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.logoBox}>
        <Logo />
      </header>
      <Input
        todoText={todoText}
        setTodoText={setTodoText}
        onSubmit={handleSubmit}
      />
      <TodoArea
        todos={todos}
        onTodoDeletion={handleTodoDeletion}
        concluded={concluded}
        setConcluded={setConcluded}
      />
      <footer></footer>
    </div>
  )
}
