function showResult() {
	var inputContent = document.getElementById("input").value;
	// console.log(inputContent);
	// console.log(typeof inputContent);
	var N = parseInt(document.getElementById('selectValue').value);
	console.log(N);
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

	var OneLine = new Array(N).fill(0);
	var adaptWhole = [];
	for (i=0; i< N; i++) {
		for (j = 0; j<N; j++) {
			if (i%2 == 0) {
				OneLine[N-1-j] = finalCombined[i*N+j];
			}
			else {
				OneLine[j] = finalCombined[i*N+j];
			}
		}
		adaptWhole.push(OneLine);
		OneLine = [];
	}
	document.getElementById("output").innerHTML = adaptWhole;
	var arrayLength = adaptWhole.length;
	document.getElementById("pixelCount").innerHTML = arrayLength;
}