import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './videos/video-1.mp4'

function Video(prop, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            src={video1}
            width={300}
        />
    )
}

export default forwardRef(Video)