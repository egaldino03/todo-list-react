import { ChangeEvent, FormEvent } from 'react'
import styles from './Input.module.css'
import { CirclePlus } from 'lucide-react'

interface InputProps {
  todoText: string
  setTodoText: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export default function Input({ todoText, setTodoText, onSubmit }: InputProps) {
  function handleTodoTextInput(e: ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value)
  }

  return (
    <form className={styles.todoForm} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={todoText}
        onChange={handleTodoTextInput}
      />
      <button type="submit">
        <span>Criar</span>
        <CirclePlus size={20} />
      </button>
    </form>
  )
}
