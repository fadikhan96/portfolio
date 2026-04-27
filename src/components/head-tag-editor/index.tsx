import { Helmet } from 'react-helmet-async';
import { isDarkishTheme } from '../../utils';
import { SanitizedSEO, SanitizedSocial } from '../../interfaces/sanitized-config';

type HeadTagEditorProps = {
  googleAnalyticsId?: string;
  appliedTheme: string;
  seo: SanitizedSEO;
  social: SanitizedSocial;
  skills: string[];
};

/**
 * Renders the head tag editor component.
 *
 * @param {HeadTagEditorProps} googleAnalyticsId - The Google Analytics ID.
 * @param {HeadTagEditorProps} appliedTheme - The applied theme.
 * @return {React.ReactElement} The head tag editor component.
 */
const HeadTagEditor: React.FC<HeadTagEditorProps> = ({
  googleAnalyticsId,
  appliedTheme,
  seo,
  social,
  skills,
}) => {
  const canonicalUrl =
    seo.siteUrl ||
    (typeof window !== 'undefined' ? window.location.href : undefined);
  const keywords = seo.keywords?.length ? seo.keywords.join(', ') : '';

  const sameAsLinks = [
    social.website,
    social.linkedin ? `https://www.linkedin.com/in/${social.linkedin}` : '',
    social.youtube
      ? `https://www.youtube.com/${social.youtube.startsWith('@') ? social.youtube : `@${social.youtube}`}`
      : '',
    social.twitter
      ? `https://twitter.com/${social.twitter.replace(/^@/, '')}`
      : '',
    social.instagram
      ? `https://www.instagram.com/${social.instagram.replace(/^@/, '')}`
      : '',
    social.facebook
      ? `https://www.facebook.com/${social.facebook}`
      : '',
  ].filter(Boolean);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seo.author || 'Fahad Amin',
    url: canonicalUrl,
    jobTitle: seo.jobTitle || 'Flutter Developer',
    description: seo.description,
    email: social.email,
    telephone: social.phone,
    knowsAbout: skills,
    sameAs: sameAsLinks,
    homeLocation: seo.location
      ? {
          '@type': 'Place',
          name: seo.location,
        }
      : undefined,
  };

  return (
    <Helmet>
      {seo.description && <meta name="description" content={seo.description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {seo.author && <meta name="author" content={seo.author} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta
        name="theme-color"
        content={isDarkishTheme(appliedTheme) ? '#000000' : '#ffffff'}
      />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      {googleAnalyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');
`}
          </script>
        </>
      )}
    </Helmet>
  );
};

export default HeadTagEditor;
