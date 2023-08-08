const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product")
    const box = document.querySelectorAll(".box")
    const pname = storeitems.getElementsByTagName("h3")

    for(var i=0; i < pname.length; i++){
        let match = box[i].getElementsByTagName("h3")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                box[i].style.display = "";

            }
            else{
                box[i].style.display = "none";
            }
        }
    }


}