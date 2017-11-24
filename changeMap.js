//Mouseover function for each state
			var qld = document.getElementById("qld");
			qld.onmouseover = function(){
				mapChanger("qld");
			}
			var nsw = document.getElementById("nsw");
			nsw.onmouseover = function(){
				mapChanger("nsw");

			}
			var vic = document.getElementById("vic");
			vic.onmouseover = function(){
				mapChanger("vic");

			}

			var nt = document.getElementById("nt");
			nt.onmouseover = function(){
				mapChanger("nt");
			}

			var wa = document.getElementById("wa");
			wa.onmouseover = function(){
				mapChanger("wa");
			}

			var sa = document.getElementById("sa");
			sa.onmouseover = function(){
				mapChanger("sa");

			}

			//Main function for changing image on mouseover
			function mapChanger(state_name){
				var image = document.getElementById("myMap");
				if(state_name === "qld"){
					document.getElementById("saySomething").innerHTML = "Hello I am in Queensland";
					image.src = "250px-Queensland_in_Australia.svg.png";
					console.log(image.src);

				}

				else if(state_name === "nsw"){
					document.getElementById("saySomething").innerHTML = "Hello I am in New South Wales";
					image.src = "800px-New_South_Wales_in_Australia.svg.png";
					console.log(image.src);
				}

				else if(state_name === "vic"){
					document.getElementById("saySomething").innerHTML = "Hello I am in Victoria";
					image.src = "800px-Victoria_in_Australia.svg.png";
					console.log(image.src);
				}

				else if(state_name === "nt"){
					document.getElementById("saySomething").innerHTML = "Hello I am in Norther Territory";
					image.src = "800px-Northern_Territory_in_Australia.svg.png";
					console.log(image.src);
				}

				else if(state_name === "wa"){
					document.getElementById("saySomething").innerHTML = "Hello I am in Western Australia";
					image.src = "800px-Western_Australia_in_Australia.svg.png";
					console.log(image.src);
				}
				
				else if(state_name === "sa"){
					document.getElementById("saySomething").innerHTML = "Hello I am in South Australia";
					image.src = "800px-South_Australia_in_Australia.svg.png";
					console.log(image.src);
				}
			}