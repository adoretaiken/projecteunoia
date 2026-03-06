import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = 'Eunoia Society | Operational Intelligence Bangladesh', 
  description = 'Eunoia Society is a non-profit organization in Bangladesh focused on fixing systemic social issues through operational intelligence and sustainable solutions.',
  keywords = 'Eunoia Society, Bangladesh, Non-profit, Social Impact, Operational Intelligence, Aid, Charity',
  image = 'https://picsum.photos/1200/630?random=1', // Placeholder OG image
  url = 'https://projecteunoia.org'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      <meta name="theme-color" content="#0338bb" />
    </Helmet>
  );
};

export default SEO;
