document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  // Toggle sidebar colapsable
  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('toggled');
  });

  // Tabs
  const tabs = document.querySelectorAll('#sidebar ul li a');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();

      // Quitar active de todos los tabs y contenidos
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Activar tab clickeado
      tab.classList.add('active');

      // Mostrar contenido correspondiente
      const target = tab.dataset.tab;
      const targetContent = document.getElementById(target);
      if (targetContent) targetContent.classList.add('active');
    });
  });
});
