"use client";

import Script from "next/script";

/**
 * Reusable website contact form component
 * Uses the LeadConnector iframe form
 */
export default function WebsiteForm() {
  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_-8px_rgba(10,18,13,0.12)] ring-1 ring-[#e8e4d9]">
        <div className="relative" style={{ minHeight: '986px' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/flo7dcg5mTX6oZqddV3w"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '986px' }}
            id="inline-flo7dcg5mTX6oZqddV3w"
            data-layout={'{"id":"INLINE"}'}
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website NP Form"
            data-height="986"
            data-layout-iframe-id="inline-flo7dcg5mTX6oZqddV3w"
            data-form-id="flo7dcg5mTX6oZqddV3w"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Website NP Form"
          />
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
