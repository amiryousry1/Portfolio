import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    path?: string;
}

/**
 * Hook to dynamically set page title and meta description.
 * Also updates OG tags for social sharing.
 */
export function useSEO({ title, description, path }: SEOProps) {
    useEffect(() => {
        const baseTitle = 'أمير يسري — مصمم UI/UX';
        document.title = title ? `${title} | ${baseTitle}` : baseTitle;

        // Meta description
        if (description) {
            let meta = document.querySelector('meta[name="description"]');
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', 'description');
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', description);
        }

        // OG Title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', title || baseTitle);

        // OG Description
        if (description) {
            let ogDesc = document.querySelector('meta[property="og:description"]');
            if (!ogDesc) {
                ogDesc = document.createElement('meta');
                ogDesc.setAttribute('property', 'og:description');
                document.head.appendChild(ogDesc);
            }
            ogDesc.setAttribute('content', description);
        }

        // OG URL
        if (path) {
            let ogUrl = document.querySelector('meta[property="og:url"]');
            if (!ogUrl) {
                ogUrl = document.createElement('meta');
                ogUrl.setAttribute('property', 'og:url');
                document.head.appendChild(ogUrl);
            }
            ogUrl.setAttribute('content', `https://amiryousry.online${path}`);
        }

        return () => {
            document.title = baseTitle;
        };
    }, [title, description, path]);
}
