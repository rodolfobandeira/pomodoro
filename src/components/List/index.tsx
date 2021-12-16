import Item from './Item';
import { ITask } from '../../types/task';

interface Props {
    tasks: ITask[],
    taskSelect: (selectedTask: ITask) => void
}

function List( { tasks, taskSelect }: Props) {
    return (
        <aside>
            <h2>Tasks</h2>
            <div>
                {tasks.map((task) => (
                    <Item
                        selectTask={ taskSelect }
                        // task={task.task}
                        // time={task.time}
                        key={task.id}
                        {...task}
                    />
                ))}
            </div>
        </aside>
    )
}

export default List;