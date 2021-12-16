import Watch from './Watch';
import { minutesToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';
import Button from '../Button';

interface Props {
    selected: ITask | undefined,
    finalizeTask: () => void
}

export default function Stopwatch({ selected, finalizeTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(
                minutesToSeconds(selected.time)
            )
        }
    }, [selected])

    function countdown(count: number = 0) {
        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1);
                return countdown(count - 1);
            }
            finalizeTask();
            
        }, 1000)
    }
    
    return (
        <div>
            <hr />
            <br />            
            <div>
                <Watch time={ time } />
            </div>

            <div className="pt-5 text-center">
                <Button
                    onClick={ () => countdown(time) }
                    text="Start"
                />
            </div>
        </div>
    )
}
