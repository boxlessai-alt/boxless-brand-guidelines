import { useState, useEffect } from 'react';
import { getParam, loadFont } from './utils';

import CoverPage from './components/CoverPage';
import BrandPositioningPage from './components/BrandPositioningPage';
import LinkedInProfilePage from './components/LinkedInProfilePage';
import LinkedInProfileContinuedPage from './components/LinkedInProfileContinuedPage';
import IdealClientPage from './components/IdealClientPage';
import ContentGuidelinesPage from './components/ContentGuidelinesPage';
import OutreachGuidelinesPage from './components/OutreachGuidelinesPage';
import BackCoverPage from './components/BackCoverPage';

function Header({ data }) {
  return (
    <div
      className="header"
      style={{ background: data.secondary }}
    >
      <div className="header-left" style={{ color: 'white', fontFamily: data.fontHeading }}>
        Boxless AI
      </div>
      <div className="header-right" style={{ color: 'white', fontFamily: data.fontBody }}>
        Brand Guidelines
      </div>
    </div>
  );
}

function Footer({ data }) {
  return (
    <div className="footer" style={{ fontFamily: data.fontBody }}>
      <div>boxless-ai.com</div>
      <div>Confidential — {data.name || 'Client'}</div>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState({});
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const parsed = {
      name: getParam('name'),
      primary: getParam('primary') || '#802662',
      secondary: getParam('secondary') || '#4D1F4D',
      accent: getParam('accent') || '#FFB266',
      fontHeading: getParam('font_heading') || 'DM Sans',
      fontBody: getParam('font_body') || 'DM Sans',
      positioning: getParam('positioning'),
      oneliner: getParam('oneliner'),
      headline_1: getParam('headline_1'),
      headline_2: getParam('headline_2'),
      headline_3: getParam('headline_3'),
      about_section: getParam('about_section'),
      featured_suggestion: getParam('featured_suggestion'),
      cta_recommendation: getParam('cta_recommendation'),
      feel_words: getParam('feel_words'),
      ideal_clients: getParam('ideal_clients'),
      top_result: getParam('top_result'),
      report_date: getParam('report_date'),
      ready: getParam('ready'),
    };

    setData(parsed);

    // Load fonts (no-op for DM Sans)
    loadFont(parsed.fontHeading);
    loadFont(parsed.fontBody);

    // Signal ready immediately if param says so
    if (parsed.ready === 'true') {
      document.body.setAttribute('data-ready', 'true');
    }

    // Also signal when browser fonts are fully ready
    document.fonts.ready.then(() => {
      document.body.setAttribute('data-ready', 'true');
      setFontsLoaded(true);
    });
  }, []);

  // NOTE: We do NOT gate rendering on fontsLoaded.
  // Content renders immediately with fallback fonts,
  // then upgrades when web fonts arrive.
  // This matches the brand-kit renderer and prevents
  // blank PDFs from Playwright.

  return (
    <div className="guidelines-document">
      {/* Page 1: Cover — no header/footer, full-bleed */}
      <CoverPage data={data} />

      {/* Page 2: Brand Positioning */}
      <div className="page">
        <Header data={data} />
        <div className="page-content">
          <BrandPositioningPage data={data} />
        </div>
        <Footer data={data} />
      </div>

      {/* Page 3: LinkedIn Profile */}
      <div className="page">
        <Header data={data} />
        <div className="page-content">
          <LinkedInProfilePage data={data} />
        </div>
        <Footer data={data} />
      </div>

      {/* Page 4: LinkedIn Profile (Continued) */}
      <div className="page">
        <Header data={data} />
        <div className="page-content">
          <LinkedInProfileContinuedPage data={data} />
        </div>
        <Footer data={data} />
      </div>

      {/* Page 5: Ideal Client */}
      <div className="page">
        <Header data={data} />
        <div className="page-content">
          <IdealClientPage data={data} />
        </div>
        <Footer data={data} />
      </div>

      {/* Page 6: Content Guidelines */}
      <div className="page">
        <Header data={data} />
        <div className="page-content">
          <ContentGuidelinesPage data={data} />
        </div>
        <Footer data={data} />
      </div>

      {/* Page 7: Outreach Guidelines */}
      <div className="page">
        <Header data={data} />
        <div className="page-content">
          <OutreachGuidelinesPage data={data} />
        </div>
        <Footer data={data} />
      </div>

      {/* Page 8: Back Cover — no header/footer, full-bleed */}
      <BackCoverPage data={data} />
    </div>
  );
}
