function removePromotion(id: string) {
	const items = JSON.parse(localStorage.getItem('promotion') || '[]');
	items.push(id);
	localStorage.setItem('promotion', JSON.stringify(items));
}

function showPromotion(id: string) {
	const items = JSON.parse(localStorage.getItem('promotion') || '[]');
	return !items.includes(id);
}

function resetPromotions() {
	localStorage.removeItem('promotion');
}

export { removePromotion, showPromotion, resetPromotions };
