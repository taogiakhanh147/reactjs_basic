import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph() {
    const context = useContext(ThemeContext)

    return (
        <div className={context.theme}>
            <p>Tao Gia Khanh</p>
        </div>
    )
}

export default Paragraph