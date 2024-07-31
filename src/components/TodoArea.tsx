import styles from './TodoArea.module.css'
import TodoItem from './TodoItem'
import { ClipboardList } from 'lucide-react'

interface TodoAreaProps {
  todos: string[]
  onTodoDeletion: (text: string) => void
  concluded: number
  setConcluded: React.Dispatch<React.SetStateAction<number>>
}

export default function TodoArea({
  todos,
  onTodoDeletion,
  concluded,
  setConcluded,
}: TodoAreaProps) {
  return (
    <div className={styles.todoArea}>
      <header className={styles.header}>
        <div className={styles.statsWrapper}>
          <p className={styles.todosCreated}>Tarefas criadas</p>
          <span>{todos.length}</span>
        </div>
        <div className={styles.statsWrapper}>
          <p className={styles.todosConcluded}>Concluídas</p>
          <span>
            {concluded} de {todos.length}
          </span>
        </div>
      </header>
      {todos.length > 0 ? (
        <ul className={styles.todos}>
          {todos.map((todo) => (
            <li className={styles.todoItem} key={todo}>
              <TodoItem
                concluded={concluded}
                setConcluded={setConcluded}
                onTodoDeletion={onTodoDeletion}
              >
                {todo}
              </TodoItem>
            </li>
          ))}
        </ul>
      ) : (
        <section className={styles.noContentWrapper}>
          <ClipboardList size={56} color={`var(--gray-300)`} strokeWidth={1} />
          <div>
            <p className={styles.noContentText}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.subtitle}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
