import styles from "./todoItem.module.css"

export default function TodoItem(props) {
    return (
        <li>{props.task}</li>
    )
}