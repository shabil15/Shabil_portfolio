// Environment Variables Configuration
// All social links and frequently changing URLs

export const socialLinks = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/shabil15",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/shabildev",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/shabilmohmd",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/ft.shabii",
  cal: process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/mohammed-shabil/30min",
};

export const contactInfo = {
  email: process.env.NEXT_PUBLIC_EMAIL || "mohammedshabil15@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+919562321211",
};

export const externalLinks = {
  resume: process.env.NEXT_PUBLIC_RESUME_URL || "https://drive.google.com/file/d/1gq3E2lqEJlp79xu-tdlMce0gFzboMp_v/view?usp=sharing",
  portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://shabil-portfolio.vercel.app",
  projectGithubBase: process.env.NEXT_PUBLIC_PROJECT_GITHUB_BASE || "https://github.com/shabil15",
  medium: process.env.NEXT_PUBLIC_MEDIUM_URL || "https://medium.com/@mohammedshabil",
  devTo: process.env.NEXT_PUBLIC_DEV_TO_URL || "https://dev.to/mohammedshabil",
};

export const companyLinks = {
  rentesy: process.env.NEXT_PUBLIC_RENTESY_URL || "https://www.linkedin.com/company/rentesy",
  brototype: process.env.NEXT_PUBLIC_BROTOTYPE_URL || "https://www.linkedin.com/company/brototype",
};

// Helper function to get all links at once
export const getAllLinks = () => ({
  social: socialLinks,
  contact: contactInfo,
  external: externalLinks,
  company: companyLinks,
});
