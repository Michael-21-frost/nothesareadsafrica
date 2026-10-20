
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/features/dashboard/read.component.ts": [
    "chunk-4P7SZ327.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/dashboard/verify.component.ts": [
    "chunk-SGWR3D6V.js",
    "chunk-V7EJVPH2.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/dashboard/my-achievements.component.ts": [
    "chunk-BYYFLO2J.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/dashboard/settings.component.ts": [
    "chunk-USQ3SKXA.js",
    "chunk-V7EJVPH2.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/creator/creator-dashboard.component.ts": [
    "chunk-BAGVQNB7.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/home/offline.component.ts": [
    "chunk-IXUMDFBX.js"
  ],
  "src/app/features/home/not-found.component.ts": [
    "chunk-MJH4KPUH.js"
  ],
  "src/app/features/auth/reset-password.component.ts": [
    "chunk-TKUWNIWP.js",
    "chunk-V7EJVPH2.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/auth/two-factor.component.ts": [
    "chunk-N7J4JCDP.js",
    "chunk-V7EJVPH2.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/join/join.component.ts": [
    "chunk-ESXQ4LKD.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/join/guardian-consent.component.ts": [
    "chunk-EMTF4PBW.js",
    "chunk-V7EJVPH2.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/join/qualify.component.ts": [
    "chunk-VSIG3DZB.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/join/checkout.component.ts": [
    "chunk-T2KQQQPE.js",
    "chunk-V7EJVPH2.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/join/payment-callback.component.ts": [
    "chunk-5KEOH2CS.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/dashboard/dashboard.component.ts": [
    "chunk-3N35OBTA.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/faq/faq.component.ts": [
    "chunk-ONXW3GKE.js",
    "chunk-JCJMDYFK.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/contact/contact.component.ts": [
    "chunk-WML4W6BZ.js",
    "chunk-V7EJVPH2.js",
    "chunk-ARFZVAUR.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/legal/legal-centre.component.ts": [
    "chunk-YIV4YO5A.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/legal/legal-page.component.ts": [
    "chunk-TDLVFO6R.js",
    "chunk-JCJMDYFK.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/auth/sign-in.component.ts": [
    "chunk-YXE6K5SU.js",
    "chunk-V7EJVPH2.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/auth/sign-up.component.ts": [
    "chunk-QR4WIVXU.js",
    "chunk-V7EJVPH2.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/auth/verify-email.component.ts": [
    "chunk-DIOGGA4W.js",
    "chunk-V7EJVPH2.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/auth/forgot-password.component.ts": [
    "chunk-XRIHWOP6.js",
    "chunk-V7EJVPH2.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/think/think.component.ts": [
    "chunk-3MOK3INB.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/think/article.component.ts": [
    "chunk-U2WFMLEA.js",
    "chunk-JCJMDYFK.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/compete/compete.component.ts": [
    "chunk-LHDTVNPP.js",
    "chunk-JCJMDYFK.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/leaderboard/leaderboard.component.ts": [
    "chunk-UEVAUVI4.js",
    "chunk-ARFZVAUR.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/achievements/achievements.component.ts": [
    "chunk-O2GNIL3V.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/recognition/recognition.component.ts": [
    "chunk-PMPF3YKN.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/rewards/rewards.component.ts": [
    "chunk-CK36EDQO.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/africa-reads-500/africa-reads-500.component.ts": [
    "chunk-F24QJLGY.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "node_modules/firebase/app/dist/esm/index.esm.js": [
    "chunk-L7V6YEM7.js",
    "chunk-V57PG3LP.js"
  ],
  "node_modules/firebase/messaging/dist/esm/index.esm.js": [
    "chunk-Q2PVNJX7.js",
    "chunk-V57PG3LP.js"
  ],
  "src/app/features/home/home.component.ts": [
    "chunk-DYTVBTBQ.js",
    "chunk-I32PDLPE.js"
  ],
  "node_modules/marked/lib/marked.esm.js": [
    "chunk-LCQLJAPA.js"
  ],
  "src/app/features/about/about.component.ts": [
    "chunk-JBEXMMEC.js",
    "chunk-JCJMDYFK.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/book/book.component.ts": [
    "chunk-HQW7HZWF.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ],
  "src/app/features/how-it-works/how-it-works.component.ts": [
    "chunk-XF2A2KSR.js",
    "chunk-ARFZVAUR.js",
    "chunk-CCEPRT57.js",
    "chunk-I32PDLPE.js"
  ]
},
  assets: {
    'index.csr.html': {size: 13937, hash: '12140a13b754e9cda8476116646564272dbd42b0c2617e20885a3e6140afecbf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3151, hash: '504bc96a43128d5e9251c71df5e856ebb63156e49d57fcb91c1f74f37a785539', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CFMDQNFB.css': {size: 111698, hash: '9f7xQy9ZUeU', text: () => import('./assets-chunks/styles-CFMDQNFB_css.mjs').then(m => m.default)}
  },
};
