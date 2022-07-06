//querySelector method returns all element matching the CSS selector
let backToTopBtn = document.querySelector('.back-to-top')

// When users scroll down 200px, show the back-to-top button
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex' //reveals the button
    } else {
        backToTopBtn.style.display = 'none' //hides the button
    }
}

// top nav menu
let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// food category
let foodMenuList = document.querySelector('.food-item-wrap')
let foodCategory = document.querySelector('.food-category')
let categories = foodCategory.querySelectorAll('button')

//.from() method converts the item into an array
//.froEach() method calls a function for each element of the array
//parameters(function, current value, index)
//even.target returns the element that triggered the event
//.classList is used to remove\add classes to elements
Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = foodCategory.querySelector('button.active')
        currCat.classList.remove('active') //removes the 'active' class from the button
        e.target.classList.add('active') //add the 'active' class to the element that is being clicked 
        
        foodMenuList.classList ='food-item-wrap '+ e.target.getAttribute('data-food-type')
    }
})

//animation when scrolling through the page

//let the browser know that we want to do an animation
//default refresh rate is 60 frames/seconds
//setTimeout will wait 1 frame before calling the 'callback function'
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}
let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    //element.getBoundingClientRect() returns an object containing the element's and its postion relative to its containerfichage.
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()

//for mobiles users
let bottomNavItems = document.querySelectorAll('.mb-nav-item')
let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        //selects the class of mobile navigation
        let crrItem = document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})