import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className='w-full bg-zinc-950 aspect-video'>
    <ReactPlayer 
    width="100%"
    heigth="100%"
    controls
    url="https://www.youtube.com/watch?v=Jai8w6k_GnY"
    />
   </div>
  )
}