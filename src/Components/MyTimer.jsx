import { useTimer } from 'react-timer-hook';
function MyTimer({ expiryTimestamp, onexpirefunction }) {
    const handleexpire = () => {
        alert("Time is up and your code has been submitted....")
        onexpirefunction()
    }
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: handleexpire });


    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '30px' }}>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>

        </div>
    );
}
export default MyTimer