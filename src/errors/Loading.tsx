import { Motion } from "@motionone/solid";
import { Component } from "solid-js";

const Loading : Component = () => {
    return (
       <div class="flex justify-center items-center my-[20%] w-full h-full">
        <Motion.h1
        class="text-white text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: 100 }}
        >Loading</Motion.h1>
       </div>
    )
}

export default Loading;