function showResult() {
	var inputContent = document.getElementById("input").value;
	// console.log(inputContent);
	// console.log(typeof inputContent);
	var strArray = inputContent.split(',');
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

	var OneLine = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var adaptWhole = [];
	for (i=0; i< 16; i++) {
		for (j = 0; j<16; j++) {
			if (i%2 == 0) {
				OneLine[15-j] = finalCombined[i*16+j];
			}
			else {
				OneLine[j] = finalCombined[i*16+j];
			}
		}
		adaptWhole.push(OneLine);
		OneLine = [];
	}
	document.getElementById("output").innerHTML = adaptWhole;
	var arrayLength = adaptWhole.length;
	document.getElementById("pixelCount").innerHTML = arrayLength;
}