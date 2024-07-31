import { useState } from 'react'
import styles from './TodoItem.module.css'
import { Trash2, Check } from 'lucide-react'

interface TodoItemProps {
  children: string
  concluded: number
  setConcluded: React.Dispatch<React.SetStateAction<number>>
  onTodoDeletion: (text: string) => void
}

export default function TodoItem({
  children,
  concluded,
  setConcluded,
  onTodoDeletion,
}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(false)

  function toggleCheck() {
    setIsChecked(!isChecked)
    if (isChecked === true) {
      setConcluded(concluded - 1)
    } else {
      setConcluded(concluded + 1)
    }
  }

  return (
    <main className={styles.item}>
      <div className={styles.checkWrapper} onClick={toggleCheck}>
        {isChecked ? (
          <button className={styles.checkbox}>
            <Check size={12} strokeWidth={4} />
          </button>
        ) : (
          <button className={styles.unchecked}>
            <Check size={12} strokeWidth={4} />
          </button>
        )}
      </div>
      <p
        className={isChecked ? `${styles.text} ${styles.checked}` : styles.text}
      >
        {children}
      </p>
      <button
        type="button"
        className={styles.delete}
        onClick={() => onTodoDeletion(children)}
      >
        <Trash2 size={24} />{' '}
      </button>
    </main>
  )
}
