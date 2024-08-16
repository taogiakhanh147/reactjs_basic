import { useEffect, useLayoutEffect, useState, memo } from "react"

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// Callback sẽ được gọi lại mỗi khi deps thay đổi
//--------------------------------------------------

// Chu trình đối với hook useEffect
// 1. Cập nhật lại State
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// Chu trình đối với hook useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi clean up nếu Deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
//--------------------------------------------------
// 1. Callback luôn được gọi lại sau khi component mounted

// Bai tap 1: MOUNT AND UNMOUNT
// function Content() {
//     return (
//         <div>
//             <h1>Tào Gia Khánh</h1>
//         </div>
//     )
// }

// Bai tap 2: useEffect() ve Call API va Go to top
// const tabs = ['posts', 'comments', 'albums']
// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setTypes] = useState('posts')
//     const [showGoToTop, setShowGoToTop] = useState(false)

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             if(window.scrollY >= 200){
//                 setShowGoToTop(true)
//             } else {
//                 setShowGoToTop(false)
//             }

//             // setShowGoToTop(window.scrollY >= 200)
//         }
//         window.addEventListener('scroll', handleScroll)

//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     },[])

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     style={type === tab ? {
//                         color: '#fff',
//                         background: '#333',
//                     } : {}}
//                     onClick={() => setTypes(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             {posts.map(post => (
//                 <li key={post.id}>{post.title || post.name}</li>
//             ))}
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20
//                     }}
//                 >
//                     Go to top
//                 </button>
//             )}
//         </div>
//     )
// }



// Bai tap 3: useEffect() ve resize
// function Content() {
//    const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize', handleResize)

//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     },[])

//     return (
//         <div>
//            <h1>{width}</h1>
//         </div>
//     )
// }

// Bai tap 4: UseEffect ve setInterval
// function Content() {
//     const [coutdown, setCountdown] = useState(180)

//     useEffect(() => {
//         const timerID = setInterval(() => {
//             setCountdown(prevState => prevState - 1)
//         }, 1000)

//         return () => {
//             clearInterval(timerID)
//         }
//     }, [])

//     return (
//         <div>
//             <h1>{coutdown}</h1>
//         </div>
//     )
// }

// Bai tap 5: UseEffect ve setTimout
// function Content() {
//     const [coutdown, setCountdown] = useState(180)

//     useEffect(() => {
//         setTimeout(() => {
//             setCountdown(coutdown - 1)
//             console.log(coutdown)
//         }, 1000)

//     }, [coutdown])

//     return (
//         <div>
//             <h1>{coutdown}</h1>
//         </div>
//     )
// }

//Bai tap 6: UseEffect ve cleanup và click chon anh (clip 37)
// function Content() {
//     const [avartar, setAvatar] = useState()

//     useEffect(() => {
//         // cleanup
//         return () => {
//             avartar && URL.revokeObjectURL(avartar.preview)
//         }
//     }, [avartar])

//     const handelPreviewAvatar = (e) => {
//         const file = e.target.files[0]

//         if(file) {
//             file.preview = URL.createObjectURL(file)
//             setAvatar(file)   
//         }
//     }

//     return (
//        <div>
//             <input
//                 type="file"
//                 onChange={handelPreviewAvatar}
//             />
//             {avartar && (
//                 <img src={avartar.preview} alt="" width="60%"></img>
//             )}
//        </div>
//     )
// }

// Bai tap 7: UseEffect ve fake chat (clip 38)
// const lessons = [
//     {
//         id: 1,
//         name: 'ReactJS'
//     },
//     {
//         id: 2,
//         name: 'Javascript'
//     },
//     {
//         id: 3,
//         name: 'C#'
//     }
// ]

// function Content() {
//     const [lessonId, setLessonId] = useState(1)

//     useEffect(() => {
//         const handleComment = ({detail}) => {
//             console.log(detail);   
//         }

//         window.addEventListener(`lesson-${lessonId}`, handleComment)

//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         }
//     }, [lessonId])

//     return (
//         <div>
//             {lessons.map(lesson => (
//                 <li 
//                     key={lesson.id}
//                     style={{
//                         color: lessonId === lesson.id ? "red" : "black"
//                     }}
//                     onClick={() => setLessonId(lesson.id)}
//                 >
//                     {lesson.name}
//                 </li>
//             ))}
//         </div>
//     )
// }

// Bai tap 8: useLayoutEffect de tranh loi giao dien UI
// function Content() {
//     const [count, setCount] = useState(0)

//     useLayoutEffect(() => {
//         if(count > 3){
//             setCount(0)
//         }
//     }, [count])

//     const handleRun = () => {
//         setCount(count + 1)
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleRun}>Run</button>
//         </div>
//     )
// }

// Bai tap 9: Memo (clip 41)
// function Content({count}) {
//     console.log('re-render');
    
//     return (
//         <div>
//             <h1>hello anh em {count}</h1>
//         </div>
//     )
// }

// Bai tap 10: useCallback (clip 42)
function Content({onIncrease}) {
    console.log('re-render');
    
    return (
        <div>
            <h1>hello anh em</h1>
            <button onClick={onIncrease}>Click me</button>
        </div>
    )
}

export default memo(Content)