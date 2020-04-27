import React, { useState } from 'react';
import classNames from 'classnames';
import Transition from '../Transition/Transition'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface IAlert {
    title?: string,
    type: AlertType,
    description?: string,
    closeable?: boolean,
    onClose: () => void,
}

const Alert: React.FC<IAlert> = props => {
    const [hide, setHide] = useState(false)
    const { title, description, closeable, onClose, type } = props
    const handleClick = () => {
        setHide(!hide)
        onClose && onClose()
    }
    const classes = classNames('alert', {
        [`alert-${type}`]: type
    })
    const titleClass = classNames('title', {
        'bold-title': description
    })

    return <Transition
        on={!hide}
        timeout={300}
        animation="zoom-in-top">
        <div className={classes}>
            {title && <h1 className={titleClass}>{title}</h1>}
            {description && <div>{description}</div>}
            {closeable && <span onClick={handleClick}>关闭</span>}
        </div>

    </Transition>
}

export default Alert