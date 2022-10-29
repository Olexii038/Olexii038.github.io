


var lowernumber = -10;
var upperNumber = 10;

function start() {
	generateNewPoint()
}

function setBorders() {
	var input1 = document.getElementById("input1")
	var input2 = document.getElementById("input2")
	changeBorders(input1.value, input2.value)
	input1.value = ""
	input2.value = ""
}

function changeBorders(value1, value2) {
	if (value1 == "" || value2 == "") {
		return
	}
	num1 = Number(value1)
	num2 = Number(value2)
	if (isNaN(num1) || isNaN(num2)) {
		return
	}
	if (num1 >= num2) {
		return
	}
	lowernumber = num1
	upperNumber = num2
}

function generateNewPoint() {
	var label = document.getElementById("generator")
	label.textContent = getRandomNumbers()
}

function getRandomNumbers() {
	var nums = []
	nums[0] = Math.floor(((upperNumber - lowernumber) * Math.random() + lowernumber))
	nums[1] = Math.floor(((upperNumber - lowernumber) * Math.random() + lowernumber))
	var result = "(" + nums[0] + ", " + nums[1] + ")"
	return result 
}

