import { Motion } from "@motionone/solid";
import Backdrop from "./Backdrop";
import { JSX, Component } from 'solid-js'
import { spring } from "motion";


type ModalProps<P= {}> = P & {children?: JSX.Element,handleClose?: JSX.EventHandler<HTMLDivElement, MouseEvent>, width?:string, height?: string}
type ModalComponent<P = {}> = Component<ModalProps<P>>

const dropIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.1,
            easing: spring()
        }
    },
    exit: {
        opacity: 0
    }
}

const Modal : ModalComponent = ({ children, handleClose, width, height }) => {
    return (
        <Backdrop onClick={handleClose}>
            <Motion.div
                class={`flex flex-col m-auto
                 bg-dark-900/10 ${width ? width: 'w-[40%]'} ${height ? height: 'h-[45%]'}
                 rounded-lg
                 `}
                variants={dropIn}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </Motion.div>
        </Backdrop>
    )
}
export default Modal;