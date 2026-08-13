(function () {
	function setTheme(isDark) {
		document.body.classList.toggle('dark-mode', isDark);
		localStorage.setItem('fos-theme', isDark ? 'dark' : 'light');
		const btn = document.getElementById('site_theme_toggle');
		if (btn) btn.textContent = isDark ? '☀' : '☾';
	}

	const themeBtn = document.getElementById('site_theme_toggle');
	if (themeBtn) {
		if (localStorage.getItem('fos-theme') === 'dark') setTheme(true);
		themeBtn.addEventListener('click', () => {
			setTheme(!document.body.classList.contains('dark-mode'));
		});
	}

	const contactForm = document.getElementById('contact_form');
	const formSuccess = document.getElementById('contact_success');
	if (contactForm && formSuccess) {
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();
			contactForm.reset();
			formSuccess.classList.add('visible');
			setTimeout(() => formSuccess.classList.remove('visible'), 5000);
		});
	}
})();
