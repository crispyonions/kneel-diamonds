import { KneelDiamonds } from "./KneelDiamonds.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            const order = database.orderBuilder
            const metal = database.metals.find(metal => metal.id === order.metalId)
            const size = database.sizes.find(size => size.id === order.sizeId)
            const style = database.styles.find(style => style.id === order.styleId)

            const cost = metal.price + size.price + style.price

            const customOrder = {
                metalId: metal.id,
                sizeId: size.id,
                styleId: style.id,
                timestamp: Date.now(),
                cost: cost
            }

            addCustomOrder(customOrder)
            renderAllHTML()
        }
    }
)

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})