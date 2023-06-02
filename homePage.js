function addToCart() {
    const cart = document.getElementsByClassName("cart")[0].innerText
    const updatedCart = Number(cart) + 1
    document.getElementsByClassName("cart")[0].innerText = updatedCart
    alert("Article added to cart")
}
const user = {}
function checkInput() {
    let errors = []

    const inputFields = document.getElementsByClassName("input")
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === "") {
            let errorTxt = `${inputFields[i].name} is required`
            errors.push(errorTxt)
        } else {
            user[inputFields[i].name] = inputFields[i].value
        }
    }
    if (errors.length > 0) {
        // alert(errors.join(","))
        return false
    }

    localStorage.setItem("user", JSON.stringify(user))

    return false
}


function addEmail() {
    const existingEmail = document.getElementById("email").value
    // function will stop if @ found
    if (existingEmail.includes("@")) {
        return
    }
    let myDomain = "@bq.com"
    const domainizedEmail = `${existingEmail}${myDomain}`
    document.getElementById("email").value = domainizedEmail
}

let expanded = false
function toggleMore(addition) {
    const paragraph = document.querySelector("#see-more-text").innerHTML
    const updatedParagraph = `${paragraph} ${addition}`
    if (!expanded) {
        document.querySelector("#see-more-text").innerHTML = updatedParagraph
        expanded = true
    } else {
        document.querySelector("#see-more-text").innerHTML = "updatedParagraph"
        expanded = false
    }

}

function swapImage(image) {
    const pic = document.querySelector(".swappable")
    pic.src = image
}




// var d = document.getElementById("ny");
// var p = d.childNodes[1];
// var contents = p.innerHTML;
// console.log(d,contents)
const errorMessages = ["Email not entered", "Password not entered"]
const submitButton = document.querySelector("button")
const showErrors = () => {
    const messageWrapper = document.querySelector("#messages")
    for (let errorMessage of errorMessages) {

        // text node creation
        let errorText = document.createTextNode(errorMessage)

        // eleemtn create
        let errorElement = document.createElement("p")

        // error text appended to element
        errorElement.appendChild(errorText)

        messageWrapper.appendChild(errorElement)

    }
}
submitButton.addEventListener('click', function () {
    const image = document.querySelector("#welcome_image")
    if (image.hasAttribute('style')) {
        image.style.display = "inline";
    };
    showErrors()
})

// dataTypes
String
Object
Boolean
Number
Array

const myObj = {
    name: "value",
    setAttendence: function () {
        console.log(this.name)
    }
}

// myObj.name = "Abdullah"
// myObj.fname = "junaid"
// delete myObj.name
// myObj.setAttendence()
let loading = false
const loginButton = document.querySelector("#login")
const loginHandler = () => {
    try {
        loading = true
        // api hit

        // api hit complete
        // user inputted values

        // user registered values
        const userData = JSON.parse(localStorage.getItem('user'))
        console.log(userData)
    } catch (err) {
        alert(err)
    } finally {
        loading = false
    }
}

loginButton.addEventListener("click", loginHandler)

// const abdullah = {
//     name: "abdullah",
//     fname: "junaid",
//     percentage: (marks) => {
//         if (marks > 60) {
//             return "A"
//         } return "B"
//     }
// }

// function User(user_name, f_name, marks) {
//     this.name = user_name
//     this.fname = f_name
//     this.marks = marks
//     this.percentage = () => {
//         if (this.marks > 60) {
//             return "A"
//         } return "B"
//     }
// }

// const Ali = new User("Ali", "Sachwani", 200)
// let AliMarks = Ali.percentage()
// console.log(Ali, AliMarks)


// function Building(familyMember, rooms) {
//     this.familyMember = familyMember
//     this.rooms = rooms
//     this.getMaintance = function () {
//         if (rooms === 2) {
//             return 5000
//         }
//         return 7000
//     }
// }
// Building.prototype.getBill = function () {
//     billUnits = this.familyMember * this.rooms
//     unitAmout = 5
//     return billUnits * unitAmout
// }

// let roomNumbers = prompt("Enter Room No.")
// let familyMembers = prompt("Enter Family Members")

// let hassan = new Building(familyMembers, roomNumbers)
// console.log(hassan, hassan.getBill())
// let ahmed = new Building(5, 2)


// let currentPath = window.location
// currentPath.replace("index.html")
// window.location.pathname = "google.com"
// open("http://google.com")
// console.log(currentPath)

const showError = () => {
    try {
        throw new Error("Error Occured")
        alert("function try")
    } catch (err) {
        alert(err)
    } finally {
        alert("function completed")
    }
}
alert("Readyy")
showError()

const myProducts = [{ productId: 1, title: "XYZ", description: "XYz", image: "//link", isFeatured: true }]
featureDiv
ProductDiv
for (let product of myProducts) {
    let mainDiv = document.createElement('div')
    //  heading created
    let headingText = document.createTextNode(product.title)
    let heading = document.createElement('h2')
    heading.appendChild(headingText)
    mainDiv.appendChild(heading)

    // description
    let descriptionText = document.createTextNode(product.description)
    let description = document.createElement('p')
    description.appendChild(descriptionText)
    mainDiv.appendChild(description)

    // button
    let buttonText = document.createTextNode("See More")
    let button = document.createElement('button')
    button.appendChild(buttonText)
    button.addEventListener('click', 'button')
    mainDiv.appendChild(button)

    // add in feature and product div
    productDiv.appendChild(mainDiv)
}