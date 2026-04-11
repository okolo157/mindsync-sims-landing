import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    canonicalUrl?: string;
    image?: string;
}

export const SEO = ({
    title = 'Mindsync - Student Information Management System',
    description = 'Comprehensive school management platform for students, staff, attendance, fees, assessments, and more.',
    type = 'website',
    canonicalUrl,
    image = 'https://mindsync.solutions/og-image.png',
}: SEOProps) => {
    const url = canonicalUrl || 'https://mindsync.solutions';

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Mindsync" />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
