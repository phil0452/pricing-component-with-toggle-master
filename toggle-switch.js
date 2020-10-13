var monthprices = document.getElementsByClassName("month");
var annualprices = document.getElementsByClassName("annual");

function HideMonthlyRates(){
	for(var i = 0; i < monthprices.length; i++)
		{
			monthprices[i].style.display = 'none';
		}
}

document.getElementById("toggle-box").addEventListener("click", function(){
	var checked = document.getElementById("toggle-box").checked;	
	
	if(checked){		
		for(var i = 0; i < monthprices.length; i++)
		{
			monthprices[i].style.display = 'block';
			annualprices[i].style.display = 'none';
		}
		
		document.getElementById('month').style.color = 'black';
		document.getElementById('annual').style.color = 'hsl(234, 14%, 74%)';
	}
	else{
		for(var i = 0; i < monthprices.length; i++)
		{
			monthprices[i].style.display = 'none';
			annualprices[i].style.display = 'block';
		}
		
		document.getElementById('month').style.color = 'hsl(234, 14%, 74%)';
		document.getElementById('annual').style.color = 'black';
	}
});