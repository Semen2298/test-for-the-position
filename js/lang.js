document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для клика на кнопках и их дочерних элементах
    document.getElementById('btnLanguage').addEventListener('click', function(event) {
        document.getElementById('languageDropdown').classList.toggle('show');
    });

    document.getElementById('btnLanguage2').addEventListener('click', function(event) {
        document.getElementById('languageDropdown2').classList.toggle('show');
    });

    // Обработчики для выбора языка
    document.querySelectorAll('#languageDropdown li').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            var selectedLanguage = this.getAttribute('data-lang');
            document.getElementById('btnLanguageText').textContent = selectedLanguage;
            document.getElementById('languageDropdown').classList.remove('show');
        });
    });

    document.querySelectorAll('#languageDropdown2 li').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            var selectedLanguage2 = this.getAttribute('data-lang');
            document.getElementById('btnLanguageText2').textContent = selectedLanguage2;
            document.getElementById('languageDropdown2').classList.remove('show');
        });
    });

    // Закрытие выпадающего меню при клике вне его
    window.addEventListener('click', function(event) {
        if (!event.target.closest('#btnLanguage') && !event.target.closest('#languageDropdown')) {
            document.getElementById('languageDropdown').classList.remove('show');
        }

        if (!event.target.closest('#btnLanguage2') && !event.target.closest('#languageDropdown2')) {
            document.getElementById('languageDropdown2').classList.remove('show');
        }
    });
});
