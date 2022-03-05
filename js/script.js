let colors = document.querySelectorAll(".colors span");
let colors_select = document.querySelector("#colors-select")
colors.forEach(color => {
    color.onclick = function(){
        let option = document.createElement("option");
        option.value = this.getAttribute("data-color");
        option.textContent = this.getAttribute("data-color");
        option.setAttribute("selected","selected");
        colors_select.innerHTML = '';
        colors_select.append(option)
    }
});


$(".sizes span").click(function(){
    $(this).siblings("span").removeClass("active");
    $(this).toggleClass("active");
})

let sizes = document.querySelectorAll(".sizes span");
let sizes_select = document.querySelector("#sizes-select")
sizes.forEach(size => {
    size.onclick = function(){
        let option = document.createElement("option");
        option.value = this.textContent;
        option.textContent = this.textContent;
        sizes_select.innerHTML = '';
        sizes_select.append(option)
        
    }
});
