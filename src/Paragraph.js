import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Paragraph() {
    const context = useContext(ThemeContext)

    return (
        <div className={context.theme}>
            <p>Trinh Nguyen Dieu Anh</p>
        </div>
    )
}

export default Paragraph