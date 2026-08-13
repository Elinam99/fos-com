(function () {
	'use strict';

	const FOS_TO_GOOGLE = {
		EN: 'en',
		FR: 'fr',
		ES: 'es',
		DE: 'de',
		IT: 'it',
		PT: 'pt',
		NL: 'nl',
		RU: 'ru',
		ZH: 'zh-CN',
		JA: 'ja',
		KO: 'ko',
		AR: 'ar',
		HI: 'hi',
		BN: 'bn',
		TR: 'tr',
		VI: 'vi',
		TH: 'th',
		ID: 'id',
		PL: 'pl',
		UK: 'uk',
		RO: 'ro',
		EL: 'el',
		CS: 'cs',
		SV: 'sv',
		NO: 'no',
		DA: 'da',
		FI: 'fi',
		HU: 'hu',
		HE: 'iw',
		FA: 'fa',
		UR: 'ur',
		SW: 'sw',
		MS: 'ms',
		TL: 'tl',
		TA: 'ta',
		TE: 'te',
		MR: 'mr',
		GU: 'gu',
		KN: 'kn',
		PA: 'pa',
		ML: 'ml',
		CA: 'ca',
		HR: 'hr',
		SK: 'sk',
		BG: 'bg',
		SR: 'sr',
		LT: 'lt',
		LV: 'lv',
		ET: 'et',
		AF: 'af'
	};

	const GOOGLE_TO_FOS = Object.fromEntries(
		Object.entries(FOS_TO_GOOGLE).map(([fos, google]) => [google, fos])
	);
	GOOGLE_TO_FOS.iw = 'HE';

	const INCLUDED_LANGUAGES = Object.values(FOS_TO_GOOGLE)
		.filter((code) => code !== 'en')
		.join(',');

	let translateReady = false;
	let pendingFosCode = null;
	let readyPollTimer = null;

	function toGoogleLang(fosCode) {
		return FOS_TO_GOOGLE[fosCode] || 'en';
	}

	function toFosCode(googleLang) {
		if (!googleLang || googleLang === 'en') return 'EN';
		return GOOGLE_TO_FOS[googleLang] || 'EN';
	}

	function getSiteBasePath() {
		const pathname = window.location.pathname;
		if (/\.html?$/i.test(pathname)) {
			const dir = pathname.substring(0, pathname.lastIndexOf('/') + 1);
			return dir || '/';
		}
		if (pathname.endsWith('/')) return pathname;
		return pathname + '/';
	}

	function getCookiePaths() {
		const basePath = getSiteBasePath();
		return basePath === '/' ? ['/'] : ['/', basePath];
	}

	function readGoogTransCookie() {
		const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
		return match ? decodeURIComponent(match[1]) : '';
	}

	function getTargetLangFromCookie() {
		const value = readGoogTransCookie();
		if (!value) return 'en';
		const parts = value.split('/').filter(Boolean);
		return parts.length >= 2 ? parts[1] : 'en';
	}

	function writeGoogTransCookie(fosCode) {
		const googleLang = toGoogleLang(fosCode);
		const paths = getCookiePaths();
		const expires = 'Thu, 01 Jan 1970 00:00:00 GMT';

		if (googleLang === 'en') {
			paths.forEach((path) => {
				document.cookie = 'googtrans=;expires=' + expires + ';path=' + path;
			});
			return;
		}

		const value = '/en/' + googleLang;
		paths.forEach((path) => {
			document.cookie = 'googtrans=' + value + ';path=' + path;
		});
	}

	function getTranslateSelect() {
		return document.querySelector('select.goog-te-combo');
	}

	function triggerSelectChange(googleLang) {
		const select = getTranslateSelect();
		if (!select) return false;

		if (select.value !== googleLang) {
			select.value = googleLang;
		}
		select.dispatchEvent(new Event('change'));
		return true;
	}

	function markTranslateReady() {
		translateReady = true;
		if (readyPollTimer) {
			clearInterval(readyPollTimer);
			readyPollTimer = null;
		}
	}

	function waitForTranslateSelect(callback) {
		if (getTranslateSelect()) {
			markTranslateReady();
			callback();
			return;
		}

		let attempts = 0;
		readyPollTimer = setInterval(() => {
			attempts += 1;
			if (getTranslateSelect()) {
				markTranslateReady();
				callback();
				return;
			}
			if (attempts >= 50) {
				clearInterval(readyPollTimer);
				readyPollTimer = null;
			}
		}, 100);
	}

	function prepareTranslationCookie() {
		const savedFos = localStorage.getItem('fos-language');
		const cookieTarget = getTargetLangFromCookie();

		if (savedFos) {
			const savedGoogle = toGoogleLang(savedFos);
			if (savedGoogle === 'en' && cookieTarget !== 'en') {
				writeGoogTransCookie('EN');
				return;
			}
			if (savedGoogle !== 'en' && savedGoogle !== cookieTarget) {
				writeGoogTransCookie(savedFos);
			}
			return;
		}

		if (cookieTarget !== 'en') {
			localStorage.setItem('fos-language', toFosCode(cookieTarget));
		}
	}

	function applyTranslation(fosCode, options) {
		const opts = options || {};
		const googleLang = toGoogleLang(fosCode);
		const previousFos = localStorage.getItem('fos-language') || 'EN';

		localStorage.setItem('fos-language', fosCode);
		writeGoogTransCookie(fosCode);

		if (googleLang === 'en') {
			if (previousFos !== 'EN' || getTargetLangFromCookie() !== 'en' || opts.forceReload) {
				window.location.reload();
			}
			return;
		}

		const applyNow = () => {
			if (triggerSelectChange(googleLang)) return;
			if (!opts.skipReload) {
				window.location.reload();
			}
		};

		if (translateReady && getTranslateSelect()) {
			applyNow();
			return;
		}

		pendingFosCode = fosCode;
		waitForTranslateSelect(() => {
			if (pendingFosCode !== fosCode) return;
			pendingFosCode = null;
			applyNow();
		});
	}

	function syncPickerFromStorage() {
		const saved = localStorage.getItem('fos-language');
		if (!saved || typeof window.updateLanguageUIFromTranslate !== 'function') return;
		window.updateLanguageUIFromTranslate(saved);
	}

	window.googleTranslateElementInit = function googleTranslateElementInit() {
		if (!window.google || !window.google.translate) return;

		new window.google.translate.TranslateElement(
			{
				pageLanguage: 'en',
				includedLanguages: INCLUDED_LANGUAGES,
				autoDisplay: false,
				layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
			},
			'google_translate_element'
		);

		waitForTranslateSelect(() => {
			const saved = localStorage.getItem('fos-language') || 'EN';
			const googleLang = toGoogleLang(saved);
			const cookieTarget = getTargetLangFromCookie();

			if (googleLang !== 'en' && cookieTarget === googleLang) {
				triggerSelectChange(googleLang);
			}

			syncPickerFromStorage();
		});
	};

	window.FosTranslate = {
		apply: applyTranslation,
		toGoogleLang,
		toFosCode,
		getSavedFosCode() {
			return localStorage.getItem('fos-language') || 'EN';
		}
	};

	prepareTranslationCookie();
})();
