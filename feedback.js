// Disable form submission on enter key press
document.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
	}
});
