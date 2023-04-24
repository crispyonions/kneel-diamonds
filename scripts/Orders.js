import { getOrders } from "./database.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            const listItems = order.map(buildOrderListItem)

            addCustomOrder(customOrder)

            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

const buildOrderListItem = (order) => {
    return `<li>
        {Order #${order.id} cost $${order.cost}}
    </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

