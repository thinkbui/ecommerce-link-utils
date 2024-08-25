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

clearGenLink();
