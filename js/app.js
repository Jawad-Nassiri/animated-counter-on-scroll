const benefitsContainerElem = document.querySelector('.benefits.pad')
const benefitsElements = document.querySelectorAll('.benefit')

let offsetTop = benefitsContainerElem.offsetTop
let animated = false

window.addEventListener('scroll', () => {
    if(scrollY >= offsetTop - 100 && !animated) {

        animated = true

        benefitsElements.forEach(item => {

            let goalElem = item.querySelector('b')
            let goal = +item.dataset.goal
            let start = 0
            
            let time = setInterval(function(){
                start++

                if(start >= goal) {
                    clearInterval(time)
                }

                goalElem.textContent = start

            }, 10)
          
        })

    }
})


