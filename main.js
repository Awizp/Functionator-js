let body = document.body
let div = document.querySelector("div")
let player = document.querySelector(".player")
let containArr = []

document.addEventListener("keypress", (e) => {
    e.preventDefault()
    if (e.code == "KeyA") { addArray("left") }
    else if (e.code == "KeyD") { addArray("right") }
    else if (e.code == "KeyW") { addArray("up") }
    else if (e.code == "KeyS") { addArray("down") }
    else if (e.code == "KeyC") randomColor()
    else if (e.code == "Enter" || e.code == "Space") {
        mover()
    }
})

function goLeft() {
    let temp = player.offsetLeft
    temp = `${temp - 50}px`
    player.style.left = temp
}
function goRight() {
    let temp = player.offsetLeft
    temp = `${temp + 50}px`
    player.style.left = temp
}
function goUp() {
    let temp = player.offsetTop
    temp = `${temp - 50}px`
    player.style.top = temp
}
function goDown() {
    let temp = player.offsetTop
    temp = `${temp + 50}px`
    player.style.top = temp
}

function randomColor() {
    let color = Math.random().toString(16).substring(9, 16)
    player.style.backgroundColor = `#${color}`
}

function addArray(val) {
    let span = document.createElement("span")
    span.innerHTML = `+${val}`

    span.addEventListener("click", () => {
        let removeEl = containArr.indexOf(this)
        let RemoveItem = containArr.splice(removeEl, 1)
        div.removeChild(span)
    })

    div.appendChild(span)
    containArr.push(span)
}

function mover() {
    if (containArr.length > 0) {
        let currentPosition = player.getBoundingClientRect()
        console.log(currentPosition)
        let el = containArr.shift()
        let item = el.innerHTML.replace("+", "")
        player.textContent = `Moving ${item}`
        div.removeChild(el)

        if (item == "up") {
            goUp()
        }
        if (item == "down") {
            goDown()
        }
        if (item == "left") {
            goLeft()
        }
        else if (item == "right") {
            goRight()
        }

        //Set the time when remove the child over again we call the function,
        setTimeout(mover, 300)
    }
    else {
        player.textContent = "Move me"
    }
}
