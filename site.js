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
	const formError = document.getElementById('contact_error');
	const submitBtn = document.getElementById('contact_submit_btn');
	const CONTACT_EMAIL = 'geoffreyadevor@gmail.com';

	if (contactForm && formSuccess) {
		contactForm.addEventListener('submit', async (e) => {
			e.preventDefault();
			formSuccess.classList.remove('visible');
			formError?.classList.remove('visible');

			if (contactForm.querySelector('[name="_honey"]')?.value) return;

			const payload = {
				name: contactForm.name.value.trim(),
				email: contactForm.email.value.trim(),
				subject: contactForm.subject.value.trim(),
				message: contactForm.message.value.trim(),
				_subject: 'Fos.com contact: ' + contactForm.subject.value.trim(),
				_replyto: contactForm.email.value.trim(),
				_captcha: 'false'
			};

			if (submitBtn) {
				submitBtn.disabled = true;
				submitBtn.textContent = 'Sending…';
			}

			try {
				const response = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(CONTACT_EMAIL), {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					},
					body: JSON.stringify(payload)
				});

				if (!response.ok) throw new Error('Request failed');

				const data = await response.json();
				if (data.success !== 'true' && data.success !== true) throw new Error('Send failed');

				contactForm.reset();
				formSuccess.classList.add('visible');
				setTimeout(() => formSuccess.classList.remove('visible'), 6000);
			} catch (err) {
				formError?.classList.add('visible');
			} finally {
				if (submitBtn) {
					submitBtn.disabled = false;
					submitBtn.innerHTML = 'Send Message <span aria-hidden="true">→</span>';
				}
			}
		});
	}
})();
