var NS = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(NS, "svg");
var set = 9;
var select = false;
var path_info = new Array(set);
var circle_flag = new Array(set);
var rect_flag = new Array(set);
var tmp;
var d;
var mouse_x;
var mouse_y;
var circle_x;
var circle_y;
var circle_id;

// window.onmousedown = function console_check_down(){
// 	console.log(circle_flag);
// 	console.log(rect_flag);
// }

function path_infomation(circle_id, rect_id){
	this.circle_id = circle_id;
	this.rect_id = rect_id;;
}

function check(){
	var ans = new String();
	for (var i = 0; i < set; i++) {
		if(circle_flag[i]) ans+=1;
		else ans+=0;
	};
	for (var i = 0; i < set; i++) {
		if(rect_flag[i]) ans+=1;
		else ans+=0;
	};
	if(ans=="101011110011101101") alert("Good Answer!!");
	else alert("Bad Answer!!");
}

window.onmousemove = function MouseMove(e){
	var scroll_x = document.body.scrollLeft;
	var scroll_y = document.body.scrollTop;
	mouse_x = e.clientX + scroll_x;
	mouse_y = e.clientY + scroll_y;
	if(select) {
		tmp.setAttribute("d", d+"l"+(mouse_x-circle_x)+" "+(mouse_y-circle_y));
	}
}

function fix_path(lx, ly, r_id){
	if(select && !rect_flag[r_id]){
		var flag = false;
		path_info[circle_id].rect_id = r_id;
		rect_flag[path_info[circle_id].rect_id] = true;
		for (var i = 0; i < set; i++) {
			if(circle_flag[i] && (i < circle_id)){
				for (var j = r_id+1; j < set; j++) {
					if(rect_flag[j]){
						var id = tmp.getAttribute("id");
						var path_id = document.getElementById(id);
						delete_path(path_id, circle_id);
						flag = true;
						break;
					}else{
						tmp.setAttribute("d", d+"L"+lx+" "+ly);
						select = false;
					}
				};
			}else if(circle_flag[i] && (i > circle_id)){
				for (var j = 0; j < r_id; j++) {
					if(rect_flag[j]){
						var id = tmp.getAttribute("id");
						var path_id = document.getElementById(id);
						delete_path(path_id, circle_id);
						flag = true;
						break;
					}else{
						tmp.setAttribute("d", d+"L"+lx+" "+ly);
						select = false;
					}
				};
			}else{
				tmp.setAttribute("d", d+"L"+lx+" "+ly);
				select = false;
			}
			if(flag) break;
		};
	}
}

function delete_path(path_id,id){
	svg.removeChild(path_id);
	circle_flag[path_info[id].circle_id] = false;
	rect_flag[path_info[id].rect_id] = false;
}

window.onmouseup = function path_judge(){
	var id = tmp.getAttribute("id");
	var path_id = document.getElementById(id);
	if(select) {
		delete_path(path_id, circle_id);
		select = false;
	}
}

function create_path(mx, my, id){
	if(!circle_flag[id]){
		circle_flag[id] = true;
		var path = document.createElementNS(NS, "path");
		path.setAttribute("id", "path"+id);
		path.setAttribute("d", "M"+mx+" "+my);
		path.setAttribute("style", "stroke:black; stroke-width:10; ");
		path.setAttribute("onmousedown", "delete_path(path"+id+","+id+")");
		svg.insertBefore(path, svg.firstChild);
		path_info[id] = new path_infomation(id, null);
		circle_x = mouse_x;
		circle_y = mouse_y;
		tmp = path;
		circle_id = id;
		d = path.getAttribute("d");
		select = true;
	}
}

function create_circle(){
	var cx = 30;
	var cy = 30;
	var cr = 25;
	for (var i = 0; i < set; i++) {
		var circle = document.createElementNS(NS, "circle");
		circle.setAttribute("id", "circle"+i);
		circle.setAttribute("cx", cx);
		circle.setAttribute("cy", cy);
		circle.setAttribute("r", cr);
		circle.setAttribute("style", "fill:yellow; stroke:black; stroke-width:2; cursor:pointer;");
		svg.appendChild(circle);
		cx += 100;
	};
}

function create_rect(){
	var rx = 5;
	var ry = 180;
	var rw = 50;
	var rh = 50;
	for (var i = 0; i < set; i++) {
		var rect = document.createElementNS(NS, "rect");
		rect.setAttribute("id", "rect"+i);
		rect.setAttribute("x", rx);
		rect.setAttribute("y", ry);
		rect.setAttribute("width", rw);
		rect.setAttribute("height", rh);
		rect.setAttribute("style", "fill:blue; stroke:black; stroke-width:2; cursor:pointer;");
		svg.appendChild(rect);
		rx += 100;
	};
}

function create_text(){
	var tx = 17.5;
	var ty = 42.5;
	var words = new String("AEBCADBAEBABAEDBCA");
	for (var i = 0; i < set; i++) {
		var text = document.createElementNS(NS, "text");
		text.setAttribute("x", tx+(i*100));
		text.setAttribute("y", ty);
		text.setAttribute("style", "font-size:32; fill:black; cursor:pointer;");
		text.innerHTML = words[i];
		svg.appendChild(text);
	};
	ty += 175;
	for (var i = 0; i < set; i++) {
		var text = document.createElementNS(NS, "text");
		text.setAttribute("x", tx+(i*100));
		text.setAttribute("y", ty);
		text.setAttribute("style", "font-size:32; fill:black; cursor:pointer;");
		text.innerHTML = words[i+set];
		svg.appendChild(text);
	};
}

function create_shadow(){
	var cx = 30;
	var cy = 30;
	var cr = 25;
	for (var i = 0; i < set; i++) {
		var circle = document.createElementNS(NS, "circle");
		circle_flag[i] = false;
		circle.setAttribute("id", "circle"+i);
		circle.setAttribute("cx", cx);
		circle.setAttribute("cy", cy);
		circle.setAttribute("r", cr);
		circle.setAttribute("style", "opacity:0; cursor:pointer;");
		circle.setAttribute("onmousedown", "create_path("+cx+","+cy+","+i+")");
		svg.appendChild(circle);
		cx += 100;
	};
	var rx = 5;
	var ry = 180;
	var rw = 50;
	var rh = 50;
	for (var i = 0; i < set; i++) {
		var rect = document.createElementNS(NS, "rect");
		rect_flag[i] = false;
		rect.setAttribute("id", "rect"+i);
		rect.setAttribute("x", rx);
		rect.setAttribute("y", ry);
		rect.setAttribute("width", rw);
		rect.setAttribute("height", rh);
		rect.setAttribute("style", "opacity:0;　cursor:pointer;");
		rect.setAttribute("onmouseup", "fix_path("+(rx+rw/2)+","+(ry+rh/2)+","+i+")");
		svg.appendChild(rect);
		rx += 100;
	};
}

function setup(){
	svg.setAttribute("width", set*100);
	svg.setAttribute("height", 250);
	svg.setAttribute("onselectstart", "return false;");
	create_circle();
	create_rect();
	create_text();
	create_shadow();
	var check = document.getElementById("check");
	document.body.insertBefore(svg, check);
}