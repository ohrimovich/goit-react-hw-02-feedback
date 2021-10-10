import { nanoid } from 'nanoid';
import s from "./FeedbackOptions.module.scss";

function FeedbackOptions({options, onLeavefeedback}) {
    return (<div className={s.container}> {
        options.map(option => <button type='button' className={s.button} key={nanoid()} onClick={() => onLeavefeedback(option)}>{option}</button>)
    }
    </div>
        )
} 
   
export default FeedbackOptions;
   
