let result = 0

const count = document.getElementById('count')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const counter = e.currentTarget.classList

    if (counter.contains('subtract')) {
      result--
    } else if (counter.contains('add')) {
      result++
    } else {
      result = 0
    }

    // add color to count result

    if (result < 0) {
      count.style.color = 'green'
    } else if (result > 0) {
      count.style.color = 'red'
    } else {
      count.style.color = 'black'
    }
    count.textContent = result
  })
})
