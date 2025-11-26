import './bootstrap';
import 'preline';

// For Livewire: reinitialize Preline after navigation
document.addEventListener('livewire:navigated', () => {
    if (window.Preline) window.Preline.init();
});
