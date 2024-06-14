document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для клика на кнопке и её дочерних элементах
    document.getElementById('btnLanguage').addEventListener('click', function(event) {
        document.getElementById('languageDropdown').classList.toggle('show');
    });

    // Обработчик для выбора языка
    document.querySelectorAll('#languageDropdown a').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            var selectedLanguage = this.getAttribute('data-lang');
            document.getElementById('btnLanguageText').textContent = selectedLanguage;
            document.getElementById('languageDropdown').classList.remove('show');
            // Добавьте здесь логику для обработки смены языка
        });
    });

    // Закрытие выпадающего меню при клике вне его
    window.addEventListener('click', function(event) {
        if (!event.target.closest('#btnLanguage')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });
});
