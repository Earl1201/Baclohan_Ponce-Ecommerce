<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{ $title ?? 'DCodeMania' }}</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles

    <!-- Preline CDN fallback (guarantees dropdown & collapse works) -->
    <script src="https://unpkg.com/preline"></script>
</head>
<body class="bg-slate-200 dark:bg-slate-700">
    @livewire('partials.navbar')

    <main>
        {{ $slot }}
    </main>

    @livewire('partials.footer')
    @livewireScripts

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <x-livewire-alert::scripts />

    <!-- Initialize Preline -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            if (window.HSStaticMethods) {
                window.HSStaticMethods.autoInit();
            }
        });

        // Re-initialize Preline after Livewire navigations
        document.addEventListener('livewire:load', () => {
            if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
        });

        document.addEventListener('livewire:navigated', () => {
            if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
        });
    </script>
</body>
</html>
