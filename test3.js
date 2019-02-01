function printImages(imgs){
	console.log(imgs);
	const gallery = document.querySelector(".gallery");
	imgs.forEach(function(img,index){
		var description = img.description;
		if (!img.description) {
			description = "The perfect vake for<br><i>special events</i>";
		}
			gallery.innerHTML+=`
			<a class="img-containner"  tabindex="0">
				<p>	${description} 
					
				</p>
				<img src="${img.urls.small}" alt="" class="" >
			</a>`
	});
}
function getImages(){
		var r = new XMLHttpRequest();
	r.open("GET", "https://api.unsplash.com/collections/3871532/photos?client_id=a5199c9e8e894d15e3eaa5758d41035fb4876cc9178f461504a3cf64c57ef4d7", true);
	r.onreadystatechange = function () {
	  if (r.readyState != 4 || r.status != 200) return;
		printImages(JSON.parse(r.response));
	  // alert("Success: " + r.responseText);
	};
	r.send("banana=yellow");
};

(function() {
	getImages();
})();