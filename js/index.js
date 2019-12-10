function desetAll(){
	document.getElementById('home-link').style.color = "white";
	document.getElementById('our-work-link').style.color = "white";
	document.getElementById('our-team-link').style.color = "white";
	document.getElementById('stories-link').style.color = "white";
	document.getElementById('thanks-link').style.color = "white";
}
document.getElementById('home-link').addEventListener('click', function(){
	desetAll();
	document.getElementById('home-link').style.color = "black";
});
document.getElementById('our-work-link').addEventListener('click', function(){
	desetAll();
	document.getElementById('our-work-link').style.color = "black";
});
document.getElementById('our-team-link').addEventListener('click', function(){
	desetAll();
	document.getElementById('our-team-link').style.color = "black";
});
document.getElementById('stories-link').addEventListener('click', function(){
	desetAll();
	document.getElementById('stories-link').style.color = "black";
});
document.getElementById('thanks-link').addEventListener('click', function(){
	desetAll();
	document.getElementById('thanks-link').style.color = "black";
});