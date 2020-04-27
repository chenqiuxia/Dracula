import React from 'react';
import classNames from 'classnames';
export enum ButtonType {
    primary = 'primary',
    default = 'default',
    danger = 'danger',
    link = 'link'
}

export enum ButtonSize {
    lg = 'large',
    sm = 'small'
}

interface BaseButtonProps {
    className?: string,
    children?: React.ReactNode,
    disabled?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    href?: string
}

export const Button: React.FC<BaseButtonProps> = props => {
    const { className, btnType, disabled, size, children, href } = props
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.link) && disabled
    })
    if (btnType === ButtonType.link && href ) {
        return (<a
            className={classes}
            href={href}
          >
            {children}
          </a>
        )
      } else {
        return (
          <button
            className={classes}
            disabled={disabled}
          >
            {children}
          </button>
        )
      }

}
Button.defaultProps = {
    btnType: ButtonType.default,
    disabled: false
}

export default Button