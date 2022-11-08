// grab the icon element to toggle
// querySelector() returns the FIRST result of the search
// getByClassName() returns an array of elements by that class, so.. to access its elements
// we need to use an index [i] (to access the first element, it'd be [0]).
const themeToggleButton = document.querySelector('.theme-toggle-button');

// function to toggle the theme
const toggleTheme = () => {
	document.body.classList.toggle('dark-theme');

	if (document.body.classList.contains('dark-theme')) {
		localStorage.setItem('darkTheme', 'active');
	} else {
		localStorage.removeItem('darkTheme');
	}
}

const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme) {
	document.body.classList.add('dark-theme');
}

themeToggleButton.addEventListener('click', toggleTheme);
// function to mantain it through the localStorage
