const DEFAULT_GEN_LINK_CONTENT = "(pending generation)";
let gen_link_elem = document.getElementById("generated_link");
let listing_id_form_input = document.getElementById("form_input");
let listing_id = "";

let formEbaySubmit = function(event){
  event.preventDefault();
  alert("Not Implemented");
}

let formReset = function(event){
  event.preventDefault();
  listing_id = "";
  listing_id_form_input.value = "";
  clearGenLink();
}

let clearGenLink = function(){
  gen_link_elem.innerHTML = DEFAULT_GEN_LINK_CONTENT;
}

let genLink = function(url, name){
  let gen_lnk = document.createElement("a");
  gen_lnk.href = url;
  gen_lnk.target = "_blank";
  gen_lnk.rel = "noopener noreferrer";
  gen_link_elem.innerHTML = name + " 🔗";
  gen_link_elem.appendChild(gen_lnk);
}

clearGenLink();
