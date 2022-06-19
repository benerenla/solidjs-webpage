import { Component, createSignal, Show } from "solid-js";
import Status from './Status'
import { AiOutlineMenu } from 'solid-icons/ai'
import { IoCloseOutline } from 'solid-icons/io'
import { FaSolidHome, FaSolidUserCircle} from 'solid-icons/fa'
import Modal from "./Helper/Modal";
import { Presence } from "@motionone/solid";

const Navbar : Component= () => {
    const [modal, setModal] = createSignal(false)

    const open = () => setModal(true)
    const close = () => setModal(false)

    return (
        <>
        <nav class="container mx-auto my-3 md:w-[75rem] hover:scale-105">
            <div class="flex flex-col justify-between md:flex-row">
                <div>
                    <Status />
                </div>
                <div class="my-2">
                    <button onClick={() => modal() ? close() : open()} class="text-lg rounded-md"><AiOutlineMenu size={29} class="text-white" /></button>
                    
                </div>
            </div>
        </nav>
        <Show
        when={modal()}
        >
        <Presence>
            <Modal handleClose={close}>
                <div class="flex justify-between">
                    <div class="flex flex-col px-4 py-8 w-[15rem]">
                        <h1 class="text-dark-400 text-md mx-2 flex items-center">Pages</h1>
                        <a href="/" class="text-md h-12 px-2 text-gray-300 flex items-center rounded-md my-1 text-center hover:bg-zinc-900/20 transition"><FaSolidHome class="mx-1 -my-4" size={18} color="#fffff"/> Home</a>
                        <a href="/" class="text-md h-12 px-2 text-gray-300 flex items-center rounded-md my-1 text-center hover:bg-zinc-900/20 transition"><FaSolidUserCircle class="mx-1 -my-4" size={18} color="#fffff"/> About</a>

                    </div>
                    <div class="w-full border-l-2 border-zinc-800 h-[434px]">
                        <div class="w-full flex justify-end p-2">
                        <button onClick={close}><IoCloseOutline size={38} color="#ffffff"/></button>
                        </div>
                        <h1 class="text-white text-xl text-center">Hello.</h1>
                    </div>
                </div>
            </Modal>
            </Presence>
        </Show>
        </>
    )
}

export default Navbar;