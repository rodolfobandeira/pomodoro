import { ITask } from "../../../types/task";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void
}

export default function Item({
    task,
    time, 
    selected, 
    completed, 
    id, 
    selectTask
}: Props) {

    return (
        <div 
        className={`${'card-list-item'} ${selected ? 'selected-item' : ''} ${completed ? 'completed-item' : ''}`}
        id={id}
        onClick={() => {
            !completed && selectTask({
                task,
                time, 
                selected,
                completed,
                id
            })
        }}>
            <h3> {task} </h3>
            <span> {time} </span>
        </div>
    )
}
