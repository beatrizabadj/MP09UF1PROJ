window.onload = ()=>{
    let botonSidebar = document.querySelector('.open-btn');
    let sidebar = document.querySelector('.sidebar-index');
    //cuando se hace click al boton, la sidebar se muestra
    botonSidebar.addEventListener('click', () =>{
        sidebar.classList.toggle('active');
    });
};
