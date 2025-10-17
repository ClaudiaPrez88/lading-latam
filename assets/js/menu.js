 // Toggle sidebar
 const toggleButton = document.getElementById('menu-toggle');
      const sidebar = document.getElementById('sidebar');
let userToggled = false;

       function setInitialSidebarState() {
        if (window.innerWidth < 768) {
          sidebar.classList.add('toggled');
        } else {
          sidebar.classList.remove('toggled');
        }
      }
      setInitialSidebarState();
      window.addEventListener('resize', setInitialSidebarState);

      toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('toggled');
      });
      