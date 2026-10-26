import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Please run vite build first.');
  process.exit(1);
}

const indexHtmlPath = path.join(distDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Pre-rendered Privacy Policy content for automated verification bots (Google Play Console, Apple, etc.) and search engines
const privacyPolicyBody = `
<div class="pt-28 pb-20 bg-white dark:bg-dark-950 transition-colors duration-300">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-6">
      <a href="/" class="inline-flex items-center text-xs font-bold text-neutral-500 hover:text-dark-950 dark:hover:text-white">
        &larr; Back to Home
      </a>
    </div>

    <div class="border-b border-neutral-200 dark:border-dark-800 pb-8 mb-8">
      <span class="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">Compliance &amp; Trust</span>
      <h1 class="text-3xl sm:text-4xl font-black text-dark-950 dark:text-white font-display mt-1">
        Privacy Policy (NDPR)
      </h1>
      <p class="text-xs text-neutral-400 mt-2">
        Effective Date: 30-04-2025 &bull; Compliant with Nigeria Data Protection Regulation (NDPR)
      </p>
    </div>

    <div class="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
      <p>
        At <b>XL DRIV LIMITED</b> ("XLDriv", "we", "our"), your privacy is paramount. This Privacy Policy details our data collection, processing, and protection practices across our website, mobile applications, and logistics platform.
      </p>

      <h3 class="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">1. Information We Collect</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><b>Personal Identity:</b> Full name, verified mobile phone number, email address, profile photo, and government-issued ID for driver vetting.</li>
        <li><b>Location &amp; Geolocation Telemetry:</b> Real-time GPS coordinate telemetry while the application is in foreground or background during an active trip.</li>
        <li><b>Financial &amp; Transactional Records:</b> In-app wallet ledger, bank account details for driver disbursements, trip receipts, and payment method tokens (we never store raw card numbers; processing is handled by licensed PCI-DSS gateways).</li>
        <li><b>Device &amp; Technical Telemetry:</b> IP address, device model, mobile OS version, application crash reports, and system diagnostics.</li>
      </ul>

      <h3 class="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">2. How Your Data Is Used</h3>
      <p>
        We process your personal data strictly to match riders with drivers, execute trip negotiations, process payments, ensure in-ride physical safety, prevent fraud, and comply with Nigerian transport and regulatory requirements. <b>We never sell or monetise your personal information to third parties.</b>
      </p>

      <h3 class="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">3. Data Subject Rights Under NDPR</h3>
      <p>
        As a data subject under Nigerian law, you possess the inalienable right to request access to your stored personal records, rectify inaccuracies, withdraw consent, or request permanent deletion of your profile and data history.
      </p>

      <h3 class="text-lg font-bold text-dark-950 dark:text-white font-display pt-4">4. Account Deletion</h3>
      <p>
        You can delete your account directly through the mobile application (Settings &gt; Security &amp; Account &gt; Delete My Account) or via our <a href="/delete-account" class="text-brand-600 dark:text-brand-400 font-bold underline">Account Deletion Request Page</a>.
      </p>

      <div class="p-5 rounded-2xl bg-neutral-100 dark:bg-dark-900 border border-neutral-200 dark:border-dark-800 text-xs text-neutral-600 dark:text-neutral-400 mt-8">
        <p class="font-bold text-dark-950 dark:text-white mb-1">Data Protection Officer:</p>
        <p>Email: support@xldriv.com</p>
        <p>Address: 27, Raji Oba Street, Egbeda, Lagos State, Nigeria</p>
      </div>
    </div>
  </div>
</div>
`;

function createPageHtml({ title, description, canonicalUrl, bodyContent }) {
  let html = indexHtml;
  if (title) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
    html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${title}" />`);
    html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`);
    html = html.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${title}" />`);
  }
  if (description) {
    html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);
    html = html.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${description}" />`);
  }
  if (canonicalUrl) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
    html = html.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${canonicalUrl}" />`);
  }
  if (bodyContent) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);
  }
  return html;
}

const privacyHtml = createPageHtml({
  title: 'Privacy Policy (NDPR) | XLDriv — Move On Your Terms',
  description: 'Official Privacy Policy of XL DRIV LIMITED (XLDriv). Compliant with Nigeria Data Protection Regulation (NDPR). Details on data collection, privacy safeguards, and user rights.',
  canonicalUrl: 'https://xldriv.com/privacy_policy',
  bodyContent: privacyPolicyBody
});

const routes = [
  { path: 'privacy_policy', html: privacyHtml },
  { path: 'privacy', html: privacyHtml },
  { path: 'privacy-policy', html: privacyHtml },
  {
    path: 'delete-account',
    html: createPageHtml({
      title: 'Account Deletion Request | XLDriv',
      description: 'Request permanent deletion of your XLDriv account and associated data in compliance with NDPR and app store requirements.',
      canonicalUrl: 'https://xldriv.com/delete-account'
    })
  },
  {
    path: 'terms',
    html: createPageHtml({
      title: 'Terms of Use | XLDriv — Move On Your Terms',
      description: 'Terms and Conditions governing the use of XLDriv platform, mobility bookings, driver subscriptions, and logistics services.',
      canonicalUrl: 'https://xldriv.com/terms'
    })
  },
  {
    path: 'safety',
    html: createPageHtml({
      title: 'Safety Policy & Standards | XLDriv',
      description: 'Our commitment to rider and driver safety across Nigeria: vetted drivers, live trip sharing, emergency assistance, and zero tolerance policies.',
      canonicalUrl: 'https://xldriv.com/safety'
    })
  },
  {
    path: 'cookies',
    html: createPageHtml({
      title: 'Cookies Policy | XLDriv',
      description: 'Information on how cookies and local storage are used to maintain your session, preferences, and security on XLDriv.',
      canonicalUrl: 'https://xldriv.com/cookies'
    })
  },
  { path: 'services', html: indexHtml },
  { path: 'for-drivers', html: indexHtml },
  { path: 'about', html: indexHtml },
  { path: 'contact', html: indexHtml }
];

console.log('Generating static HTML files for SPA routes on GitHub Pages...');

for (const route of routes) {
  // 1. Directory index: dist/{route.path}/index.html (e.g. dist/privacy_policy/index.html)
  const dir = path.join(distDir, route.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'index.html'), route.html, 'utf8');

  // 2. Direct clean URL file: dist/{route.path}.html (e.g. dist/privacy_policy.html)
  fs.writeFileSync(path.join(distDir, `${route.path}.html`), route.html, 'utf8');
  console.log(`✓ /${route.path} -> dist/${route.path}/index.html & dist/${route.path}.html`);
}

console.log('Static route generation complete! GitHub Pages will now serve HTTP 200 for all routes.');
