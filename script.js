


function start() {
	generateNewPoint()
}

function generateNewPoint() {
	var label = document.getElementById("generator")
	label.textContent = getRandomNumbers()
}

function getRandomNumbers() {
	var nums = []
	nums[0] = Math.floor((20 * Math.random() - 10))
	nums[1] = Math.floor((20 * Math.random() - 10))
	var result = "(" + nums[0] + ", " + nums[1] + ")"
	return result 
}

