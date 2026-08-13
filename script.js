const shopCart = document.querySelector('#shop_cart');
const sidebarCart = document.querySelector('#sidebar_cart');
const cartPopup = document.querySelector('#cart_popup');
const cartOverlay = document.querySelector('#cart_overlay');
const cartClose = document.querySelector('#cart_close');
const cartForm = document.querySelector('#cart_form');
const cartItemsEl = document.querySelector('#cart_items');
const cartEmpty = document.querySelector('#cart_empty');
const cartBadge = document.querySelector('.cart-badge');
const cartSubtotal = document.querySelector('#cart_subtotal');
const cartTotalEl = document.querySelector('#cart_total');
const menuBar = document.querySelector('#menu_bar');
const navbar = document.querySelector('#navbar');
const categoriesPopup = document.querySelector('#categories_popup');
const categoriesOverlay = document.querySelector('#categories_overlay');
const themeToggle = document.querySelector('#theme_toggle');
const headerSearchForm = document.querySelector('#header_search_form');
const headerSearchInput = document.querySelector('#header_search_input');
const countdownEl = document.querySelector('#deal_countdown');
const searchPopup = document.querySelector('#search_popup');
const searchOverlay = document.querySelector('#search_overlay');
const searchClose = document.querySelector('#search_close');
const searchResultsList = document.querySelector('#search_results_list');
const searchNoResults = document.querySelector('#search_no_results');
const searchQueryLabel = document.querySelector('#search_query_label');
const signInBtn = document.querySelector('#sign_in_btn');
const registerBtn = document.querySelector('#register_btn');
const signInPopup = document.querySelector('#sign_in_popup');
const registerPopup = document.querySelector('#register_popup');
const signInOverlay = document.querySelector('#sign_in_overlay');
const registerOverlay = document.querySelector('#register_overlay');
const signInClose = document.querySelector('#sign_in_close');
const registerClose = document.querySelector('#register_close');
const signInForm = document.querySelector('#sign_in_form');
const registerForm = document.querySelector('#register_form');
const switchToRegister = document.querySelector('#switch_to_register');
const switchToSignIn = document.querySelector('#switch_to_signin');
const forgotPasswordBtn = document.querySelector('#forgot_password_btn');
const searchCameraBtn = document.querySelector('#search_camera_btn');
const cameraPopup = document.querySelector('#camera_popup');
const cameraOverlay = document.querySelector('#camera_overlay');
const cameraClose = document.querySelector('#camera_close');
const cameraVideo = document.querySelector('#camera_video');
const cameraStatus = document.querySelector('#camera_status');
const locationDropdown = document.querySelector('#location_dropdown');
const locationBtn = document.querySelector('#location_btn');
const locationPanel = document.querySelector('#location_panel');
const locationWheelList = document.querySelector('#location_wheel_list');
const locationFlag = document.querySelector('#location_flag');
const locationLabel = document.querySelector('#location_label');
const languageDropdown = document.querySelector('#language_dropdown');
const languageBtn = document.querySelector('#language_btn');
const languagePanel = document.querySelector('#language_panel');
const languageCodeEl = document.querySelector('#language_code');
const languageWheelList = document.querySelector('#language_wheel_list');

const COUNTRIES = [
	{ code: 'GH', abbr: 'GHA', name: 'Ghana', flag: '🇬🇭' },
	{ code: 'US', abbr: 'USA', name: 'United States', flag: '🇺🇸' },
	{ code: 'GB', abbr: 'GBR', name: 'United Kingdom', flag: '🇬🇧' },
	{ code: 'CA', abbr: 'CAN', name: 'Canada', flag: '🇨🇦' },
	{ code: 'NG', abbr: 'NGA', name: 'Nigeria', flag: '🇳🇬' },
	{ code: 'ZA', abbr: 'ZAF', name: 'South Africa', flag: '🇿🇦' },
	{ code: 'KE', abbr: 'KEN', name: 'Kenya', flag: '🇰🇪' },
	{ code: 'IN', abbr: 'IND', name: 'India', flag: '🇮🇳' },
	{ code: 'AU', abbr: 'AUS', name: 'Australia', flag: '🇦🇺' },
	{ code: 'DE', abbr: 'DEU', name: 'Germany', flag: '🇩🇪' },
	{ code: 'FR', abbr: 'FRA', name: 'France', flag: '🇫🇷' },
	{ code: 'ES', abbr: 'ESP', name: 'Spain', flag: '🇪🇸' },
	{ code: 'IT', abbr: 'ITA', name: 'Italy', flag: '🇮🇹' },
	{ code: 'BR', abbr: 'BRA', name: 'Brazil', flag: '🇧🇷' },
	{ code: 'MX', abbr: 'MEX', name: 'Mexico', flag: '🇲🇽' },
	{ code: 'JP', abbr: 'JPN', name: 'Japan', flag: '🇯🇵' },
	{ code: 'CN', abbr: 'CHN', name: 'China', flag: '🇨🇳' },
	{ code: 'KR', abbr: 'KOR', name: 'South Korea', flag: '🇰🇷' },
	{ code: 'AE', abbr: 'ARE', name: 'United Arab Emirates', flag: '🇦🇪' },
	{ code: 'SA', abbr: 'SAU', name: 'Saudi Arabia', flag: '🇸🇦' },
	{ code: 'NL', abbr: 'NLD', name: 'Netherlands', flag: '🇳🇱' },
	{ code: 'BE', abbr: 'BEL', name: 'Belgium', flag: '🇧🇪' },
	{ code: 'CH', abbr: 'CHE', name: 'Switzerland', flag: '🇨🇭' },
	{ code: 'SE', abbr: 'SWE', name: 'Sweden', flag: '🇸🇪' },
	{ code: 'NO', abbr: 'NOR', name: 'Norway', flag: '🇳🇴' },
	{ code: 'DK', abbr: 'DNK', name: 'Denmark', flag: '🇩🇰' },
	{ code: 'PL', abbr: 'POL', name: 'Poland', flag: '🇵🇱' },
	{ code: 'TR', abbr: 'TUR', name: 'Turkey', flag: '🇹🇷' },
	{ code: 'EG', abbr: 'EGY', name: 'Egypt', flag: '🇪🇬' },
	{ code: 'MA', abbr: 'MAR', name: 'Morocco', flag: '🇲🇦' },
	{ code: 'SG', abbr: 'SGP', name: 'Singapore', flag: '🇸🇬' },
	{ code: 'MY', abbr: 'MYS', name: 'Malaysia', flag: '🇲🇾' },
	{ code: 'ID', abbr: 'IDN', name: 'Indonesia', flag: '🇮🇩' },
	{ code: 'PH', abbr: 'PHL', name: 'Philippines', flag: '🇵🇭' },
	{ code: 'TH', abbr: 'THA', name: 'Thailand', flag: '🇹🇭' },
	{ code: 'VN', abbr: 'VNM', name: 'Vietnam', flag: '🇻🇳' },
	{ code: 'AR', abbr: 'ARG', name: 'Argentina', flag: '🇦🇷' },
	{ code: 'CO', abbr: 'COL', name: 'Colombia', flag: '🇨🇴' },
	{ code: 'CL', abbr: 'CHL', name: 'Chile', flag: '🇨🇱' },
	{ code: 'PT', abbr: 'PRT', name: 'Portugal', flag: '🇵🇹' },
	{ code: 'IE', abbr: 'IRL', name: 'Ireland', flag: '🇮🇪' },
	{ code: 'NZ', abbr: 'NZL', name: 'New Zealand', flag: '🇳🇿' },
	{ code: 'IL', abbr: 'ISR', name: 'Israel', flag: '🇮🇱' },
	{ code: 'RU', abbr: 'RUS', name: 'Russia', flag: '🇷🇺' },
	{ code: 'UA', abbr: 'UKR', name: 'Ukraine', flag: '🇺🇦' },
	{ code: 'PK', abbr: 'PAK', name: 'Pakistan', flag: '🇵🇰' },
	{ code: 'BD', abbr: 'BGD', name: 'Bangladesh', flag: '🇧🇩' }
];

const LANGUAGES = [
	{ code: 'EN', name: 'English' },
	{ code: 'FR', name: 'French' },
	{ code: 'ES', name: 'Spanish' },
	{ code: 'DE', name: 'German' },
	{ code: 'IT', name: 'Italian' },
	{ code: 'PT', name: 'Portuguese' },
	{ code: 'NL', name: 'Dutch' },
	{ code: 'RU', name: 'Russian' },
	{ code: 'ZH', name: 'Chinese' },
	{ code: 'JA', name: 'Japanese' },
	{ code: 'KO', name: 'Korean' },
	{ code: 'AR', name: 'Arabic' },
	{ code: 'HI', name: 'Hindi' },
	{ code: 'BN', name: 'Bengali' },
	{ code: 'TR', name: 'Turkish' },
	{ code: 'VI', name: 'Vietnamese' },
	{ code: 'TH', name: 'Thai' },
	{ code: 'ID', name: 'Indonesian' },
	{ code: 'PL', name: 'Polish' },
	{ code: 'UK', name: 'Ukrainian' },
	{ code: 'RO', name: 'Romanian' },
	{ code: 'EL', name: 'Greek' },
	{ code: 'CS', name: 'Czech' },
	{ code: 'SV', name: 'Swedish' },
	{ code: 'NO', name: 'Norwegian' },
	{ code: 'DA', name: 'Danish' },
	{ code: 'FI', name: 'Finnish' },
	{ code: 'HU', name: 'Hungarian' },
	{ code: 'HE', name: 'Hebrew' },
	{ code: 'FA', name: 'Persian' },
	{ code: 'UR', name: 'Urdu' },
	{ code: 'SW', name: 'Swahili' },
	{ code: 'MS', name: 'Malay' },
	{ code: 'TL', name: 'Filipino' },
	{ code: 'TA', name: 'Tamil' },
	{ code: 'TE', name: 'Telugu' },
	{ code: 'MR', name: 'Marathi' },
	{ code: 'GU', name: 'Gujarati' },
	{ code: 'KN', name: 'Kannada' },
	{ code: 'PA', name: 'Punjabi' },
	{ code: 'ML', name: 'Malayalam' },
	{ code: 'CA', name: 'Catalan' },
	{ code: 'HR', name: 'Croatian' },
	{ code: 'SK', name: 'Slovak' },
	{ code: 'BG', name: 'Bulgarian' },
	{ code: 'SR', name: 'Serbian' },
	{ code: 'LT', name: 'Lithuanian' },
	{ code: 'LV', name: 'Latvian' },
	{ code: 'ET', name: 'Estonian' },
	{ code: 'AF', name: 'Afrikaans' }
];

let selectedCountry = COUNTRIES[0];
let selectedLanguage = LANGUAGES[0];
let languageWheelScrollTimer = null;
let locationWheelScrollTimer = null;
const WHEEL_ITEM_HEIGHT = 44;

let searchIndex = [];
let cameraStream = null;
let highlightTimeout = null;
let cartItems = [];

function formatPrice(amount) {
	return 'GH₵' + amount.toFixed(2);
}

function renderCartItems() {
	cartItemsEl.innerHTML = cartItems.map((item) => `
		<div class="cart_item">
			<img src="${item.image}" alt="${item.name}">
			<div class="cart_item_info">
				<strong>${item.name}</strong>
				<span>${formatPrice(item.price)} × ${item.qty}</span>
			</div>
			<button type="button" class="cart_item_remove" data-id="${item.id}">Remove</button>
		</div>
	`).join('');

	cartItemsEl.querySelectorAll('.cart_item_remove').forEach((btn) => {
		btn.addEventListener('click', () => {
			removeFromCart(btn.dataset.id);
		});
	});
}

function updateCartUI() {
	const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
	const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

	cartBadge.textContent = totalQty;
	cartSubtotal.textContent = formatPrice(subtotal);
	cartTotalEl.textContent = formatPrice(subtotal);
	cartEmpty.style.display = cartItems.length ? 'none' : 'block';
	renderCartItems();
}

function addToCart(product) {
	const existing = cartItems.find((item) => item.id === product.id);
	if (existing) {
		existing.qty += 1;
	} else {
		cartItems.push({ ...product, qty: 1 });
	}
	updateCartUI();
}

function removeFromCart(id) {
	cartItems = cartItems.filter((item) => item.id !== id);
	updateCartUI();
}

function openCart() {
	cartPopup.classList.add('active');
}

function closeCart() {
	cartPopup.classList.remove('active');
}

function openSearchPopup() {
	searchPopup.classList.add('active');
}

function closeSearchPopup() {
	searchPopup.classList.remove('active');
}

function stopCamera() {
	if (cameraStream) {
		cameraStream.getTracks().forEach((track) => track.stop());
		cameraStream = null;
	}
	if (cameraVideo) {
		cameraVideo.srcObject = null;
		cameraVideo.classList.remove('active');
	}
}

function closeCamera() {
	stopCamera();
	cameraPopup.classList.remove('active');
	cameraStatus.textContent = 'Requesting camera permission...';
	cameraStatus.classList.remove('error');
}

async function openCamera() {
	closeCamera();
	cameraPopup.classList.add('active');
	cameraStatus.textContent = 'Requesting camera permission...';
	cameraStatus.classList.remove('error');

	if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
		cameraStatus.textContent = 'Camera is not available. Open this page through a browser with HTTPS or localhost.';
		cameraStatus.classList.add('error');
		return;
	}

	try {
		try {
			cameraStream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: 'environment' },
				audio: false
			});
		} catch {
			cameraStream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: false
			});
		}

		cameraVideo.srcObject = cameraStream;
		cameraVideo.classList.add('active');
		cameraStatus.textContent = 'Camera is active';
		await cameraVideo.play();
	} catch (error) {
		stopCamera();

		if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
			cameraStatus.textContent = 'Camera permission denied. Allow camera access in your browser settings and try again.';
		} else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
			cameraStatus.textContent = 'No camera found on this device.';
		} else {
			cameraStatus.textContent = 'Could not open camera. Please try again.';
		}

		cameraStatus.classList.add('error');
	}
}

function openSignIn() {
	closeRegister();
	signInPopup.classList.add('active');
	document.querySelector('#signin_email')?.focus();
}

function closeSignIn() {
	signInPopup.classList.remove('active');
	signInForm.reset();
	const subtitle = signInPopup.querySelector('.auth_subtitle');
	subtitle.textContent = 'Welcome back to Fos.com';
	signInForm.querySelectorAll('.form_group').forEach((group) => {
		group.classList.remove('has-error');
		const error = group.querySelector('.form_error');
		if (error) error.remove();
	});
}

function openRegister() {
	closeSignIn();
	registerPopup.classList.add('active');
	document.querySelector('#register_name')?.focus();
}

function closeRegister() {
	registerPopup.classList.remove('active');
	registerForm.reset();
	clearRegisterErrors();
}

function clearRegisterErrors() {
	registerForm.querySelectorAll('.form_group').forEach((group) => {
		group.classList.remove('has-error');
		const error = group.querySelector('.form_error');
		if (error) error.remove();
	});
}

function showFieldError(inputId, message) {
	const input = document.querySelector('#' + inputId);
	const group = input.closest('.form_group');
	group.classList.add('has-error');

	let error = group.querySelector('.form_error');
	if (!error) {
		error = document.createElement('p');
		error.className = 'form_error';
		group.appendChild(error);
	}
	error.textContent = message;
}

function getSectionLabel(element) {
	const section = element.closest('section, .promo-bar, nav, header');
	if (!section) return 'Page';

	if (section.classList.contains('hero-banner')) return 'Hero';
	if (section.classList.contains('deals-section')) return "Today's deals";
	if (section.classList.contains('gallery-section')) return 'Our wardrobe';
	if (section.classList.contains('promo-bar')) return 'Promo';
	if (section.classList.contains('header-nav') || section.querySelector('.nav-links')) return 'Navigation';

	return 'Page';
}

function buildSearchIndex() {
	const items = [];

	document.querySelectorAll('.nav-links a').forEach((link) => {
		const title = link.textContent.replace(/\s+/g, ' ').trim();
		items.push({
			title,
			detail: 'Navigation',
			keywords: title.toLowerCase(),
			element: link,
			image: null
		});
	});

	document.querySelectorAll('.page-main h1, .page-main h2, .page-main h3, .page-main p').forEach((el) => {
		const title = el.textContent.trim();
		if (!title) return;

		items.push({
			title,
			detail: getSectionLabel(el),
			keywords: title.toLowerCase(),
			element: el,
			image: null
		});
	});

	document.querySelectorAll('.promo-bar span').forEach((el) => {
		const title = el.textContent.trim();
		items.push({
			title,
			detail: 'Promo',
			keywords: title.toLowerCase(),
			element: el.closest('.promo-bar'),
			image: null
		});
	});

	document.querySelectorAll('[data-search-item]').forEach((el) => {
		const title = el.getAttribute('data-search-item');
		const img = el.querySelector('img');
		items.push({
			title,
			detail: getSectionLabel(el),
			keywords: title.toLowerCase(),
			element: el,
			image: img ? img.getAttribute('src') : null
		});
	});

	document.querySelectorAll('.hero-btn, .deal-badge').forEach((el) => {
		const title = el.textContent.trim();
		if (!title) return;

		items.push({
			title,
			detail: getSectionLabel(el),
			keywords: title.toLowerCase(),
			element: el,
			image: null
		});
	});

	return items;
}

function runSearch(query) {
	const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
	if (!terms.length) return [];

	return searchIndex.filter((item) =>
		terms.every((term) => item.keywords.includes(term))
	);
}

function highlightElement(element) {
	if (!element) return;

	document.querySelectorAll('.search-highlight').forEach((el) => {
		el.classList.remove('search-highlight');
	});

	element.classList.add('search-highlight');
	element.scrollIntoView({ behavior: 'smooth', block: 'center' });

	clearTimeout(highlightTimeout);
	highlightTimeout = setTimeout(() => {
		element.classList.remove('search-highlight');
	}, 2500);
}

function renderSearchResults(query, results) {
	searchResultsList.innerHTML = '';
	searchQueryLabel.textContent = 'Showing results for "' + query + '"';
	searchNoResults.classList.toggle('visible', results.length === 0);

	results.forEach((result) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'search_result_item';

		if (result.image) {
			const img = document.createElement('img');
			img.src = result.image;
			img.alt = result.title;
			button.appendChild(img);
		} else {
			const icon = document.createElement('span');
			icon.className = 'search_result_icon';
			icon.innerHTML = '<i class="fa-solid fa-tag"></i>';
			button.appendChild(icon);
		}

		const text = document.createElement('span');
		text.className = 'search_result_text';
		text.innerHTML = '<strong>' + result.title + '</strong><span>' + result.detail + '</span>';
		button.appendChild(text);

		button.addEventListener('click', () => {
			closeSearchPopup();
			highlightElement(result.element);
		});

		searchResultsList.appendChild(button);
	});
}

function performSearch() {
	const query = headerSearchInput.value.trim();
	if (!query) return;

	const results = runSearch(query);
	renderSearchResults(query, results);
	openSearchPopup();
	headerSearchInput.blur();
}

shopCart.addEventListener('click', openCart);
if (sidebarCart) sidebarCart.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
searchClose.addEventListener('click', closeSearchPopup);
searchOverlay.addEventListener('click', closeSearchPopup);

searchCameraBtn.addEventListener('click', openCamera);
cameraClose.addEventListener('click', closeCamera);
cameraOverlay.addEventListener('click', closeCamera);

signInBtn.addEventListener('click', openSignIn);
registerBtn.addEventListener('click', openRegister);
signInClose.addEventListener('click', closeSignIn);
registerClose.addEventListener('click', closeRegister);
signInOverlay.addEventListener('click', closeSignIn);
registerOverlay.addEventListener('click', closeRegister);
switchToRegister.addEventListener('click', openRegister);
switchToSignIn.addEventListener('click', openSignIn);

forgotPasswordBtn.addEventListener('click', () => {
	const email = document.querySelector('#signin_email').value.trim();
	const subtitle = signInPopup.querySelector('.auth_subtitle');

	if (!email) {
		showFieldError('signin_email', 'Enter your email to reset your password.');
		return;
	}

	subtitle.textContent = 'If an account exists, a reset link was sent to ' + email + '.';
});

signInForm.addEventListener('submit', (e) => {
	e.preventDefault();
	closeSignIn();
});

registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	clearRegisterErrors();

	const password = document.querySelector('#register_password').value;
	const confirm = document.querySelector('#register_confirm').value;

	if (password !== confirm) {
		showFieldError('register_confirm', 'Passwords do not match.');
		return;
	}

	closeRegister();
});

cartForm.addEventListener('submit', (e) => {
	e.preventDefault();
	cartItems = [];
	updateCartUI();
	closeCart();
	cartForm.reset();
});

document.querySelectorAll('.wardrobe-cart-btn').forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.stopPropagation();
		addToCart({
			id: btn.dataset.id,
			name: btn.dataset.name,
			price: Number(btn.dataset.price),
			image: btn.dataset.image
		});
		btn.classList.add('added');
		setTimeout(() => btn.classList.remove('added'), 400);
	});
});

document.addEventListener('keydown', (e) => {
	if (e.key !== 'Escape') return;

	if (locationDropdown?.classList.contains('active')) closeLocationDropdown();
	else if (languageDropdown?.classList.contains('active')) closeLanguageDropdown();
	else if (cameraPopup.classList.contains('active')) closeCamera();
	else if (signInPopup.classList.contains('active')) closeSignIn();
	else if (registerPopup.classList.contains('active')) closeRegister();
	else if (searchPopup.classList.contains('active')) closeSearchPopup();
	else if (cartPopup.classList.contains('active')) closeCart();
	else if (categoriesPopup?.classList.contains('active')) closeCategories();
});

function closeHeaderDropdowns(except) {
	if (except !== 'location') closeLocationDropdown();
	if (except !== 'language') closeLanguageDropdown();
}

function closeLocationDropdown() {
	if (!locationDropdown) return;
	locationDropdown.classList.remove('active');
	locationBtn?.setAttribute('aria-expanded', 'false');
}

function openLocationDropdown() {
	closeHeaderDropdowns('location');
	locationDropdown?.classList.add('active');
	locationBtn?.setAttribute('aria-expanded', 'true');
	scrollLocationWheelToIndex(COUNTRIES.indexOf(selectedCountry), false);
	updateLocationWheelVisuals();
}

function toggleLocationDropdown() {
	if (locationDropdown?.classList.contains('active')) {
		closeLocationDropdown();
	} else {
		openLocationDropdown();
	}
}

function closeLanguageDropdown() {
	if (!languageDropdown) return;
	languageDropdown.classList.remove('active');
	languageBtn?.setAttribute('aria-expanded', 'false');
}

function openLanguageDropdown() {
	closeHeaderDropdowns('language');
	languageDropdown?.classList.add('active');
	languageBtn?.setAttribute('aria-expanded', 'true');
	scrollLanguageWheelToIndex(LANGUAGES.indexOf(selectedLanguage), false);
	updateLanguageWheelVisuals();
}

function toggleLanguageDropdown() {
	if (languageDropdown?.classList.contains('active')) {
		closeLanguageDropdown();
	} else {
		openLanguageDropdown();
	}
}

function getFlagUrl(code) {
	return 'https://flagcdn.com/24x18/' + code.toLowerCase() + '.png';
}

function renderFlagMarkup(code, name) {
	return '<img src="' + getFlagUrl(code) + '" alt="' + name + ' flag" width="24" height="18" loading="lazy" decoding="async">';
}

function updateLocationUI() {
	if (!locationFlag || !locationLabel) return;
	locationFlag.innerHTML = renderFlagMarkup(selectedCountry.code, selectedCountry.name);
	locationLabel.textContent = selectedCountry.abbr;
	locationWheelList?.querySelectorAll('.location-wheel-item').forEach((item) => {
		item.classList.toggle('selected', item.dataset.code === selectedCountry.code);
		item.setAttribute('aria-selected', item.dataset.code === selectedCountry.code ? 'true' : 'false');
	});
}

function getLocationWheelCenterIndex() {
	if (!locationWheelList) return 0;
	return Math.round(locationWheelList.scrollTop / WHEEL_ITEM_HEIGHT);
}

function scrollLocationWheelToIndex(index, smooth) {
	if (!locationWheelList) return;
	const clamped = Math.max(0, Math.min(index, COUNTRIES.length - 1));
	locationWheelList.scrollTo({
		top: clamped * WHEEL_ITEM_HEIGHT,
		behavior: smooth ? 'smooth' : 'auto'
	});
}

function updateLocationWheelVisuals() {
	if (!locationWheelList) return;
	const centerIndex = getLocationWheelCenterIndex();
	locationWheelList.querySelectorAll('.location-wheel-item').forEach((item, index) => {
		item.classList.remove('center', 'near');
		const distance = Math.abs(index - centerIndex);
		if (distance === 0) item.classList.add('center');
		else if (distance === 1) item.classList.add('near');
	});
}

function finalizeLocationWheelSelection() {
	const index = getLocationWheelCenterIndex();
	const country = COUNTRIES[index];
	if (!country) return;
	selectedCountry = country;
	localStorage.setItem('fos-country', country.code);
	updateLocationUI();
}

function selectCountry(country) {
	selectedCountry = country;
	localStorage.setItem('fos-country', country.code);
	updateLocationUI();
	closeLocationDropdown();
}

function updateLanguageUI() {
	if (languageCodeEl) languageCodeEl.textContent = selectedLanguage.code;
	languageWheelList?.querySelectorAll('.language-wheel-item').forEach((item) => {
		item.classList.toggle('selected', item.dataset.code === selectedLanguage.code);
		item.setAttribute('aria-selected', item.dataset.code === selectedLanguage.code ? 'true' : 'false');
	});
}

function selectLanguage(language) {
	if (selectedLanguage.code === language.code) {
		closeLanguageDropdown();
		return;
	}
	selectedLanguage = language;
	localStorage.setItem('fos-language', language.code);
	updateLanguageUI();
	closeLanguageDropdown();
	if (window.FosTranslate) {
		window.FosTranslate.apply(language.code);
	}
}

function getLanguageWheelCenterIndex() {
	if (!languageWheelList) return 0;
	const scrollTop = languageWheelList.scrollTop;
	return Math.round(languageWheelList.scrollTop / WHEEL_ITEM_HEIGHT);
}

function scrollLanguageWheelToIndex(index, smooth) {
	if (!languageWheelList) return;
	const clamped = Math.max(0, Math.min(index, LANGUAGES.length - 1));
	languageWheelList.scrollTo({
		top: clamped * WHEEL_ITEM_HEIGHT,
		behavior: smooth ? 'smooth' : 'auto'
	});
}

function updateLanguageWheelVisuals() {
	if (!languageWheelList) return;
	const centerIndex = getLanguageWheelCenterIndex();
	languageWheelList.querySelectorAll('.language-wheel-item').forEach((item, index) => {
		item.classList.remove('center', 'near');
		const distance = Math.abs(index - centerIndex);
		if (distance === 0) item.classList.add('center');
		else if (distance === 1) item.classList.add('near');
	});
}

function finalizeLanguageWheelSelection() {
	const index = getLanguageWheelCenterIndex();
	const language = LANGUAGES[index];
	if (!language || selectedLanguage.code === language.code) return;
	selectedLanguage = language;
	localStorage.setItem('fos-language', language.code);
	updateLanguageUI();
	if (window.FosTranslate) {
		window.FosTranslate.apply(language.code);
	}
}

function initLocationDropdown() {
	if (!locationWheelList) return;

	locationWheelList.innerHTML = COUNTRIES.map((country) => `
		<button type="button" class="location-wheel-item" role="option" data-code="${country.code}" aria-label="${country.name}" aria-selected="false">
			<span class="location-wheel-flag">${renderFlagMarkup(country.code, country.name)}</span>
			<span class="location-wheel-name">${country.abbr}</span>
		</button>
	`).join('');

	locationWheelList.querySelectorAll('.location-wheel-item').forEach((item, index) => {
		item.addEventListener('click', () => {
			scrollLocationWheelToIndex(index, true);
			setTimeout(() => {
				finalizeLocationWheelSelection();
				closeLocationDropdown();
			}, 180);
		});
	});

	locationWheelList.addEventListener('scroll', () => {
		updateLocationWheelVisuals();
		clearTimeout(locationWheelScrollTimer);
		locationWheelScrollTimer = setTimeout(finalizeLocationWheelSelection, 120);
	}, { passive: true });

	const savedCountry = localStorage.getItem('fos-country');
	if (savedCountry) {
		const match = COUNTRIES.find((item) => item.code === savedCountry);
		if (match) selectedCountry = match;
	}
	updateLocationUI();
	scrollLocationWheelToIndex(COUNTRIES.indexOf(selectedCountry), false);
	updateLocationWheelVisuals();
}

window.updateLanguageUIFromTranslate = function (fosCode) {
	const match = LANGUAGES.find((item) => item.code === fosCode);
	if (!match) return;
	selectedLanguage = match;
	updateLanguageUI();
	scrollLanguageWheelToIndex(LANGUAGES.indexOf(selectedLanguage), false);
	updateLanguageWheelVisuals();
};

function initLanguageDropdown() {
	if (!languageWheelList) return;

	languageWheelList.innerHTML = LANGUAGES.map((language) => `
		<button type="button" class="language-wheel-item" role="option" data-code="${language.code}" aria-selected="false">
			<span class="language-wheel-code">${language.code}</span>
			<span class="language-wheel-name">${language.name}</span>
		</button>
	`).join('');

	languageWheelList.querySelectorAll('.language-wheel-item').forEach((item, index) => {
		item.addEventListener('click', () => {
			scrollLanguageWheelToIndex(index, true);
			setTimeout(() => {
				finalizeLanguageWheelSelection();
				closeLanguageDropdown();
			}, 180);
		});
	});

	languageWheelList.addEventListener('scroll', () => {
		updateLanguageWheelVisuals();
		clearTimeout(languageWheelScrollTimer);
		languageWheelScrollTimer = setTimeout(finalizeLanguageWheelSelection, 120);
	}, { passive: true });

	const savedLanguage = localStorage.getItem('fos-language');
	if (savedLanguage) {
		const match = LANGUAGES.find((item) => item.code === savedLanguage);
		if (match) selectedLanguage = match;
	}
	updateLanguageUI();
	scrollLanguageWheelToIndex(LANGUAGES.indexOf(selectedLanguage), false);
	updateLanguageWheelVisuals();
}

locationBtn?.addEventListener('click', (e) => {
	e.stopPropagation();
	toggleLocationDropdown();
});

languageBtn?.addEventListener('click', (e) => {
	e.stopPropagation();
	toggleLanguageDropdown();
});

document.addEventListener('pointerdown', (e) => {
	if (locationDropdown?.classList.contains('active') && !locationDropdown.contains(e.target)) {
		closeLocationDropdown();
	}
	if (languageDropdown?.classList.contains('active') && !languageDropdown.contains(e.target)) {
		closeLanguageDropdown();
	}
});

function closeCategories() {
	categoriesPopup?.classList.remove('active');
	navbar?.classList.remove('active');
	menuBar?.setAttribute('aria-expanded', 'false');
	if (categoriesOverlay) {
		categoriesOverlay.setAttribute('aria-hidden', 'true');
	}
	document.body.classList.remove('categories-open');
}

function openCategories() {
	categoriesPopup?.classList.add('active');
	navbar?.classList.add('active');
	menuBar?.setAttribute('aria-expanded', 'true');
	if (categoriesOverlay) {
		categoriesOverlay.setAttribute('aria-hidden', 'false');
	}
	document.body.classList.add('categories-open');
}

function toggleCategories() {
	if (categoriesPopup?.classList.contains('active')) {
		closeCategories();
	} else {
		openCategories();
	}
}

menuBar?.addEventListener('click', (e) => {
	e.stopPropagation();
	toggleCategories();
});

categoriesOverlay?.addEventListener('click', closeCategories);

document.addEventListener('pointerdown', (e) => {
	if (!categoriesPopup?.classList.contains('active')) return;
	if (menuBar?.contains(e.target) || navbar?.contains(e.target)) return;
	closeCategories();
});

navbar?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', closeCategories);
});

headerSearchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	performSearch();
});

function setTheme(isDark) {
	document.body.classList.toggle('dark-mode', isDark);
	localStorage.setItem('fos-theme', isDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
	setTheme(!document.body.classList.contains('dark-mode'));
});

if (localStorage.getItem('fos-theme') === 'dark') {
	setTheme(true);
}

function startCountdown() {
	if (!countdownEl) return;

	let totalSeconds = 21 * 3600 + 46 * 60 + 48;

	setInterval(() => {
		if (totalSeconds <= 0) totalSeconds = 24 * 3600;

		const hours = Math.floor(totalSeconds / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;

		countdownEl.textContent =
			String(hours).padStart(2, '0') + ':' +
			String(minutes).padStart(2, '0') + ':' +
			String(seconds).padStart(2, '0');

		totalSeconds--;
	}, 1000);
}

searchIndex = buildSearchIndex();
initLocationDropdown();
initLanguageDropdown();
startCountdown();
