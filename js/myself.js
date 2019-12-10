window.onload = function()
{
	function sleep(waitTime)
	{
		var start = (new Date()).getTime();
		while((new Date()).getTime() - start < waitTime)
		{
			console.log((new Date()).getTime() - start);
			continue;
		}
	}
	var GetLeftBarEvent = document.getElementsByClassName("LeftBar");
/*	GetLeftBarEvent.onmouseover = function()
	{
//	//	sleep(250);
		for(var i = 1; i <= 1000; i++)
		{
			sleep(0.1);
			GetLeftBarEvent.style.width = (0.15 * i).toString() + "px";
//			sleep(1);
		}
	//	GetLeftBarEvent.style.width = "150px";
	};
	GetLeftBarEvent.onmouseout = function()
	{
	//	sleep(250)
		for(var i = 1000; i >= 1; i--)
		{
			sleep(0.1);
			GetLeftBarEvent.style.width = (15 * i).toString() + "px";
//			sleep(1);
		}
	//	GetLeftBarEvent.style.width = "15px";
	};*/
}