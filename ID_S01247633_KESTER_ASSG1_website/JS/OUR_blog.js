const filters = document.querySelector(".items");
const img = document.querySelectorAll(".gallery .image");
window.onload = ()=>{ 
  filters.onclick = (selectedItem)=>{ // once the user clicks on one of the few buttons, this is recorded
    if(selectedItem.target.classList.contains("item")){ 
      //given there are actually images under the user data-name
      filters.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let name = selectedItem.target.getAttribute("data-name"); 
      console.log(selectedItem)
      img.forEach((image) => {
        let finalimg = image.getAttribute("data-name");
        if((finalimg == name) || (name == "all")){
          image.classList.remove("hide"); //the next 2 lines are basically for appearing and disappearing
          image.classList.add("show");
        }else{
          image.classList.add("hide");
          image.classList.remove("show"); 
        }
      });
    }
  }
}