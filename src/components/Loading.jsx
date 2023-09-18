import { FaSpinner } from 'react-icons/fa';
import style from "../css/Spinner.module.css"

export function Loading() {
    return (
        <div className={style.spinner}>
            <FaSpinner className={style.spinnerRotate} size={65} />
        </div>
    )
}
