const toggleBtn = document.getElementById('theme-toggle');     /*it finds the theme button by ID and on click 
                                                                switches the body between light and darkmode  */

// Default mode is light
document.body.classList.add('light');           /* light mode is kept as default  */

toggleBtn.addEventListener('click', () => {         /* runs the when the buttoon is clicked  */
    if (document.body.classList.contains('light')) {    /*checks body is in light mode*/
        document.body.classList.remove('light');      
        document.body.classList.add('dark');               /*switch to dark mode*/
        toggleBtn.textContent = "☀️";
    } 
    else 
    {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        toggleBtn.textContent = "🌙";
    }
});
