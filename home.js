function highlight(name_element,color) {

    let elements = document.getElementsByTagName(name_element);
    elements = shuffle(elements);
    const  rand = Math.floor( Math.random() * elements.length );
    console.log(name_element);

    elements[rand].style.backgroundColor = color
}
function shuffle(arr){
	let temp;
	for(let  i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
function choose_name_element(){
    let names_elements = ['li','p','button','input'];
    names_elements = shuffle(names_elements);
    const  rand = Math.floor( Math.random() * names_elements.length );
    return names_elements[rand];
}
function choose_color(){
    const color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    return color;
}
function highlight_random_element() {
    color = choose_color();
    name_el = choose_name_element();
    highlight(name_el,color); 
}

function cancel_highlight_random_element() {
    name_el = choose_name_element();
    highlight(name_el,null); 
}
highlight_random_element();
setInterval(highlight_random_element, 2000);
setInterval(cancel_highlight_random_element, 2000);