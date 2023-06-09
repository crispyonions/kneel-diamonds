import { getSizes } from "./database.js"

const sizes = getSizes()

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}


/* or it could pop up this code document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(`User chose size ${event.target.value}`)
        }
    }
)
*/
