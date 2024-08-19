import clsx from 'clsx'
import style from './Button.module.scss'

function Button({ primary, disabled }) {
    const classes = clsx(style.btn,
        {
            [style.primary] : primary,
            [style.disabled] : disabled
        }
    )
    return (
        <button className={classes}>
            Click me
        </button>
    )
}

export default Button