/* @ds-bundle: {"format":4,"namespace":"MaxMartinezDesignSystem_7200aa","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"CaseStudyCard","sourcePath":"components/cards/CaseStudyCard.jsx"},{"name":"DisplayMarquee","sourcePath":"components/text/DisplayMarquee.jsx"},{"name":"EyebrowLabel","sourcePath":"components/text/EyebrowLabel.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"a6e8a7d80034","components/cards/CaseStudyCard.jsx":"b0ca91894f4c","components/text/DisplayMarquee.jsx":"5199c398b825","components/text/EyebrowLabel.jsx":"0ac95b97312b","ui_kits/portfolio/Closing.jsx":"ba7843a42bf9","ui_kits/portfolio/Header.jsx":"194295619871","ui_kits/portfolio/Hero.jsx":"23c4f251b2b6","ui_kits/portfolio/WorkStack.jsx":"3f3f2d57833d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaxMartinezDesignSystem_7200aa = window.MaxMartinezDesignSystem_7200aa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-sans)",
  lineHeight: 1,
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-4)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "opacity var(--duration-base) var(--ease-standard)"
};
const variants = {
  primary: {
    background: "var(--ink-strong)",
    color: "var(--surface)",
    border: "1px solid var(--ink-strong)",
    borderRadius: "var(--radius-sm)",
    padding: "var(--space-10) var(--space-20)",
    boxShadow: "var(--shadow-sm)",
    fontWeight: "var(--weight-medium)",
    fontSize: "var(--button-size)"
  },
  outline: {
    background: "var(--surface)",
    color: "var(--text-subtle)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "var(--radius-pill-sm)",
    padding: "var(--space-10) var(--space-20)",
    fontWeight: "var(--weight-regular)",
    fontSize: "var(--button-size)"
  },
  cta: {
    background: "var(--surface)",
    color: "var(--text-subtle)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "var(--radius-pill-lg)",
    padding: "var(--space-40) var(--space-120)",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-regular)",
    fontSize: "var(--button-cta-size)"
  }
};
function Button({
  variant = "primary",
  as,
  href,
  disabled = false,
  icon,
  children,
  style,
  ...rest
}) {
  const Tag = as || (href ? "a" : "button");
  const composed = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...(disabled ? {
      opacity: 0.4,
      pointerEvents: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    style: composed
  }, rest), children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/CaseStudyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const accents = {
  orchid: "var(--accent-orchid-deep)",
  teal: "var(--accent-teal-deep)",
  navy: "var(--accent-navy-deep)",
  moss: "var(--accent-moss-deep)",
  ember: "var(--accent-ember-deep)"
};
function CaseStudyCard({
  accent = "orchid",
  eyebrow = "Case Study",
  title,
  description,
  href,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: accents[accent] || accents.orchid,
      color: "var(--text-on-dark)",
      borderRadius: "var(--radius-none)",
      padding: "var(--space-32)",
      fontFamily: "var(--font-sans)",
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      textTransform: "uppercase",
      color: "var(--text-on-dark)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "title-card",
    style: {
      marginBottom: "var(--space-10)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, description)));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/text/DisplayMarquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DisplayMarquee({
  children,
  size = "var(--display-xl-size)",
  rotate = 90,
  scale = 1,
  color = "var(--ink)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "display-xl",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transformOrigin: "center",
      transform: `translate(-50%,-50%) rotate(${rotate}deg) scale(${scale})`,
      whiteSpace: "nowrap",
      fontSize: size,
      color
    }
  }, children));
}
Object.assign(__ds_scope, { DisplayMarquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/DisplayMarquee.jsx", error: String((e && e.message) || e) }); }

// components/text/EyebrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EyebrowLabel({
  tone = "default",
  as = "div",
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: tone === "quiet" ? "eyebrow-quiet" : "eyebrow",
    style: {
      textTransform: "uppercase",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/text/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Closing.jsx
try { (() => {
function Closing() {
  const {
    Button,
    EyebrowLabel
  } = window.MaxMartinezDesignSystem_7200aa;
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: 'var(--space-120) var(--space-40)',
      background: 'var(--surface)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-40)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Contact"), /*#__PURE__*/React.createElement("h2", {
    className: "display-sm",
    style: {
      margin: 0,
      maxWidth: '24ch'
    }
  }, "Got something you want to build?"), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    href: "#contact"
  }, "Say hi"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-20)',
      padding: 'var(--space-32) var(--space-40)',
      borderTop: '1px solid var(--border-subtle)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "body",
    style: {
      color: 'var(--text-subtle)'
    }
  }, "Max Martinez"), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-quiet",
    style: {
      textTransform: 'uppercase'
    }
  }, "Aim high. Build fast."));
}
Object.assign(window, {
  Closing,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Header.jsx
try { (() => {
function Header() {
  const {
    EyebrowLabel
  } = window.MaxMartinezDesignSystem_7200aa;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-20) var(--space-40)',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      textDecoration: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: '-0.4px',
      color: 'var(--ink)'
    }
  }, "Max Martinez"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-32)'
    }
  }, ['Work', 'About', 'Contact'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    className: "body",
    style: {
      textDecoration: 'none',
      color: 'var(--text-subtle)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--ink)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-subtle)'
  }, l))), /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "quiet",
    style: {
      display: 'none'
    }
  }, "Digital design"));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
function Hero() {
  const {
    DisplayMarquee,
    EyebrowLabel,
    Button
  } = window.MaxMartinezDesignSystem_7200aa;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: 640,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,520px)',
      alignItems: 'center',
      gap: 'var(--space-40)',
      padding: 'var(--space-120) var(--space-40)',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "760",
    height: "760",
    viewBox: "0 0 760 760",
    style: {
      position: 'absolute',
      right: -120,
      top: -40,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "var(--border-subtle)",
    strokeWidth: "1.5"
  }, [120, 180, 240, 300, 360].map(r => /*#__PURE__*/React.createElement("circle", {
    key: r,
    cx: "380",
    cy: "380",
    r: r
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-32)',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Digital design"), /*#__PURE__*/React.createElement("h1", {
    className: "display-md",
    style: {
      margin: 0
    }
  }, "Aim high. Build fast."), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: 0,
      color: 'var(--text-subtle)',
      maxWidth: '46ch'
    }
  }, "Independent brand and product designer. I help early teams look like the company they are about to become."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-20)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#about"
  }, "Read my story"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#work"
  }, "Discover more work")), /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "quiet"
  }, "Brand \xB7 Web \xB7 Product \xB7 AI \xB7 Webflow")), /*#__PURE__*/React.createElement(DisplayMarquee, {
    style: {
      position: 'relative',
      height: 560
    },
    size: "200px",
    scale: 1
  }, "Aim high. Build fast."));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkStack.jsx
try { (() => {
const PROJECTS = [{
  accent: 'orchid',
  title: 'Teammates',
  description: 'Creating a playful brand for a new category of AI employees'
}, {
  accent: 'teal',
  title: 'CoAd',
  description: 'Modernizing an established workforce brand for its next stage of growth'
}, {
  accent: 'navy',
  title: 'Risk Ledger',
  description: 'Refreshing a cybersecurity brand for enterprise growth'
}];
function WorkStack() {
  const {
    CaseStudyCard,
    EyebrowLabel
  } = window.MaxMartinezDesignSystem_7200aa;
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: 'var(--space-80) var(--space-40) var(--space-120)',
      background: 'var(--surface-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      position: 'sticky',
      top: 80 + i * 24
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    accent: p.accent,
    title: p.title,
    description: p.description,
    href: "#work",
    style: {
      minHeight: 420,
      justifyContent: 'space-between',
      boxShadow: '0 -1px 0 var(--surface-muted)'
    }
  }))))));
}
Object.assign(window, {
  WorkStack,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkStack.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.DisplayMarquee = __ds_scope.DisplayMarquee;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

})();
