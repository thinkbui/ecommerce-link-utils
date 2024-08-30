const DEFAULT_GEN_LINK_CONTENT = "(pending generation)";
const LINK_DATA = {
                    "eBay": {
                              "name": "eBay",
                              "url_base": "https://www.ebay.com/itm/",
                              "url_tail": "",
                            },
                    "Mercari": {
                                 "name": "Mercari",
                                 "url_base": "https://www.mercari.com/us/item/",
                                 "url_tail": "",
                               },
                    "Walmart": {
                                 "name": "Walmart",
                                 "url_base": "https://www.walmart.com/ip/",
                                 "url_tail": "",
                               },
                    "Poshmark": {
                                "name": "Poshmark",
                                "url_base": "https://poshmark.com/listing/",
                                "url_tail": "",
                              },
                 }

let gen_btns_elem = document.getElementById("generated_buttons");
let gen_link_elem = document.getElementById("generated_link");
let listing_id_form_input = document.getElementById("form_input");
let listing_id = "";


let formSubmit = function(event, key){
  event.preventDefault();
  let link_data = LINK_DATA[key];
  let listing_id_val = listing_id_form_input.value;
  let link_url = [link_data["url_base"], listing_id_val, link_data["url_tail"]].join("");
  genLink(link_url, link_data["name"], listing_id_val);
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

let genLink = function(url, name, itm_num){
  let gen_lnk = document.createElement("a");
  gen_lnk.href = url;
  gen_lnk.target = "_blank";
  gen_lnk.rel = "noopener noreferrer";
  gen_lnk.innerHTML = ["🔗 Go to",name,itm_num].join(" ");
  gen_link_elem.innerHTML = "";
  gen_link_elem.appendChild(gen_lnk);
}

let genFormButtons = function(){
  let keys = Object.keys(LINK_DATA);
  for(let i=0;i<keys.length;i++){
    let btn_elem = document.createElement("input");
    btn_elem.type = "submit";
    btn_elem.value = LINK_DATA[keys[i]]["name"];
    btn_elem.setAttribute("onclick",["formSubmit(event,'",keys[i],"')"].join(""));
    gen_btns_elem.appendChild(btn_elem);
  }
}

genFormButtons();
clearGenLink();
