function toggleElementDisplay(elementId, iconId) {
    const element = document.getElementById(elementId);
    const icon = document.getElementById(iconId);

    const plusIcon = 'assets/images/icon-plus.svg';
    const minusIcon = 'assets/images/icon-minus.svg';

    if (elementId.startsWith('answer')) {
    }
    if (element.style.display === 'block') {
        element.style.display = 'none';
        if (icon) {
            icon.src = plusIcon;
        }
        return;
    }
    element.style.display = 'block';
    if (icon) {
        icon.src = minusIcon;
    }
}