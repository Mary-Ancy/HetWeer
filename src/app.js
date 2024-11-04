function handleSearchSubmit(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-input");
  console.log(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
