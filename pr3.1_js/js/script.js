let totalCash = parseInt(prompt('Cash'))

let watchesCount = parseInt(prompt('Watches?'))

let earringsCount = parseInt(prompt('earrings?'))

let watchesSum = parseInt(prompt('Price watches?')) * watchesCount

let earringsSum = parseInt(prompt('Price earrings?')) * earringsCount

document.write(totalCash >= earringsSum + watchesSum)