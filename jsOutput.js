function showResult() {
	var inputContent = document.getElementById("input").value;
	// console.log(inputContent);
	// console.log(typeof inputContent);
	strArray = inputContent.split(',');
	var count = 0;
	var finalCombined = [];
	var miCombined = '0x';
	for (i = 0; i< strArray.length; i++) {
		count = count%3;
		if (count == 2) {
			miCombined = miCombined.concat(strArray[i].slice(2));
			finalCombined.push(miCombined);
			miCombined = '0x';
		}
		else {
			miCombined = miCombined.concat(strArray[i].slice(2));
		}
		count += 1;
	}
	document.getElementById("output").innerHTML = finalCombined;
}