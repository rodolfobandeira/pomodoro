interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minutesString = String(minutes);
    const secondsString = String(seconds);

    const zeroPad = (num: string, places: number) => String(num).padStart(places, '0')

    return (
        <div className="stopwatch">
            <span>{ zeroPad(minutesString, 2) }</span>
            <span>:</span>
            <span>{ zeroPad(secondsString, 2) }</span>
        </div>
    )
}