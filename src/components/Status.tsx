import { Component, Match, onMount, Show, Switch } from "solid-js";
import { useLanyard } from "solid-use-lanyard";
import { Motion } from "@motionone/solid";
import { spring } from "motion";


const Status : Component = () => {
    const { status, loading } = useLanyard({
        userId: "760499240966684683",
    })
    return (
        <div class="flex">
           <Show 
            when={status()}
            fallback={<h1 class="text-lg text-white">Not Activity</h1>}
           >
            <Show 
                when={status().activities[0].assets.large_image}
                fallback={null}
            >
                <Switch fallback={null}>
                    <Match
                    when={status().listening_to_spotify}
                    >
                      <Motion.img hover={{ rotate: 180 }} transition={{ duration: 1 }} class="w-14 h-14 rounded-lg" src={status().spotify.album_art_url} />
                    </Match>
                    <Match
                    when={!status().listening_to_spotify}
                    >
                      <Motion.img hover={{ scale: 1.1 }} class="w-14 h-14 rounded-lg" src={`https://cdn.discordapp.com/app-assets/${status().activities[0].application_id}/${status().activities[0].assets.large_image}`} />
                    </Match>
                </Switch>
            </Show>
           <div>
            <Switch fallback={
            <>
                <h1 class="text-white text-xl mx-2">{status().activities[0].name}</h1>
                <p class="text-gray-400 text-lg mx-2">By {status().activities[0].details}</p>
            </>
            }>
                <Match 
                when={status().listening_to_spotify}
                >
                    <h1 class="text-white text-xl mx-2">{status().spotify.song}</h1>
                    <p class="text-gray-400 text-lg mx-2">By {status().spotify.artist}</p>
                </Match>
            </Switch>
           </div>
           </Show>
        </div>
    )   
}
export default Status;