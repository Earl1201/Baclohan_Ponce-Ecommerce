import './bootstrap';
import 'preline';

// This is the key part - reinitialize Preline on every Livewire navigation
document.addEventListener('livewire:navigated', () => {
    window.HSStaticMethods.autoInit();
});
