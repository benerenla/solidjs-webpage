import { Motion } from "@motionone/solid";
import { Component, JSX,  } from "solid-js";

type BackdropProps<P= {}> = P & {children?: JSX.Element,onClick?: JSX.EventHandler<HTMLDivElement, MouseEvent> }
type BackdropComponent<P = {}> = Component<BackdropProps<P>>

const Backdrop :BackdropComponent = ({ children, onClick }) => {
    return (
        <Motion.div 
        class="flex bg-black/50 inset-0 dark fixed items-center justify-center"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{opacity: 1}}
        exit={{ opacity: 0}}
        >
            {children}
        </Motion.div>
    )
}
export default Backdrop;