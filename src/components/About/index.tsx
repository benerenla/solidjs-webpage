import { Component } from "solid-js";
import { Motion } from "@motionone/solid";
const About: Component = () => {
    return (
        <section class="container mx-auto md:w-[75rem] h-auto my-12" id="about">
            <div class="flex justify-center py-2">
                <Motion.img hover={{ scale: 1.06 }} src="https://avatars.githubusercontent.com/u/88831406?v=4" width="280px " class=" rounded-lg" />
            </div>
            <div class="text-center text-white">
                <h1 class="text-white text-4xl">Atlas</h1>
            </div>
        </section>
    )
}

export default About;