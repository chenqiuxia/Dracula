
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
    animationName: string,
    wrapper?: boolean
}
const Transition: React.FC<TransitionProps> = (props) => {
    const { children, classNames, animation,
        wrapper, animationName, ...restProps } = props
        return <CSSTransition classnames={classNames ? classNames: animationName} {...restProps}>
            {wrapper ? <div>{children}</div>: children}
        </CSSTransition>
}
Transition.defaultProps={
    unmountOnExit: true,
  appear: true,
}

export default Transition