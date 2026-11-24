import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { syncBrowserFavicon } from './utils/imageUtils';

const appName = 'CV. Wahana Sinergi Mitra';

router.on('success', (event) => {
    const siteLogo = event?.detail?.page?.props?.site_logo;
    if (siteLogo) {
        syncBrowserFavicon(siteLogo);
    }
});

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const initialLogo = props?.initialPage?.props?.site_logo;
        if (initialLogo) {
            syncBrowserFavicon(initialLogo);
        }
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#10B981',
    },
});
