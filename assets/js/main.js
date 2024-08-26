const DEFAULT_GEN_LINK_CONTENT = "(pending generation)";

const EBAY_LINK_NAME = "eBay";
const EBAY_LINK_BASE = "https://www.ebay.com/itm/";
const MERCARI_LINK_NAME = "Mercari";
const MERCARI_LINK_BASE = "https://www.mercari.com/us/item/";
const WALMART_LINK_NAME = "Walmart";
const WALMART_LINK_BASE = "https://www.walmart.com/ip/";

let gen_link_elem = document.getElementById("generated_link");
let listing_id_form_input = document.getElementById("form_input");
let listing_id = "";

// TODO: Combine these into single function as these are basically identical
let formEbaySubmit = function(event){
  event.preventDefault();
  let listing_id_val = listing_id_form_input.value;
  let link_url = EBAY_LINK_BASE + listing_id_val;
  genLink(link_url, EBAY_LINK_NAME, listing_id_val);
}

let formMercariSubmit = function(event){
  event.preventDefault();
  let listing_id_val = listing_id_form_input.value;
  let link_url = MERCARI_LINK_BASE + listing_id_val;
  genLink(link_url, MERCARI_LINK_NAME, listing_id_val);
}

let formWalmartSubmit = function(event){
  event.preventDefault();
  let listing_id_val = listing_id_form_input.value;
  let link_url = WALMART_LINK_BASE + listing_id_val;
  genLink(link_url, WALMART_LINK_NAME, listing_id_val);
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

clearGenLink();
