# Analytics Setup Guide

Your portfolio now has **two analytics systems** for comprehensive visitor tracking:

## 1. Vercel Analytics ✅ (Already Active)

**Status:** Already installed and working!

Vercel Analytics is automatically enabled for your project. No setup needed.

**To view analytics:**
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your `portfolio` project
3. Click **Analytics** in the sidebar
4. View real-time visitors, page views, and more

**Features:**
- Real-time visitor tracking
- Page views and unique visitors
- Device and browser breakdown
- Geographic data
- Privacy-friendly (no cookies needed)

---

## 2. Umami Analytics 🎯 (Setup Required)

**Status:** Code ready, needs configuration

Umami gives you beautiful real-time dashboards with live visitor counts.

### Setup Steps:

#### Step 1: Create Free Umami Account
1. Go to https://cloud.umami.is
2. Sign up for a free account
3. Verify your email

#### Step 2: Create Website
1. In Umami dashboard, click **"Add Website"**
2. Enter details:
   - **Name:** Mia Elena Portfolio
   - **Domain:** miaelena.vercel.app (or your custom domain)
   - **Timezone:** Your timezone
3. Click **Save**

#### Step 3: Get Your Website ID
1. After creating the website, you'll see a **Website ID** (looks like: `abc123de-f456-7890-gh12-ij3456kl7890`)
2. Copy this ID

#### Step 4: Add to Vercel Environment Variables
1. Go to Vercel dashboard → Your project → **Settings** → **Environment Variables**
2. Add new variable:
   - **Name:** `NEXT_PUBLIC_UMAMI_WEBSITE_ID`
   - **Value:** (paste your Website ID from Umami)
   - **Environment:** Production, Preview, Development (select all)
3. Click **Save**
4. Redeploy your site (Vercel will do this automatically)

#### Step 5: Verify It's Working
1. Visit your live site
2. Go back to Umami dashboard
3. You should see live visitor data appearing!

### Viewing Your Analytics:

**Umami Dashboard:** https://cloud.umami.is
- Real-time visitor count
- Page views by URL
- Traffic sources (where visitors came from)
- Devices and browsers
- Geographic locations
- Beautiful charts and graphs

---

## What Data You'll See:

### Vercel Analytics:
- **Real-time visitors** currently on your site
- **Page views** for each page
- **Top pages** by traffic
- **Visitor demographics** (location, device)

### Umami Analytics:
- **Live visitor count** (updates every few seconds)
- **Traffic sources** (Google, LinkedIn, direct, etc.)
- **Popular pages** with view counts
- **User journey** (which pages they visit)
- **Time on site** and engagement metrics

---

## Privacy & Compliance:

Both analytics are **privacy-friendly**:
- ✅ No cookies stored
- ✅ GDPR compliant
- ✅ No personal data collected
- ✅ No consent banner needed

---

## Next Steps After Setup:

1. **Enable Vercel Analytics** in your Vercel dashboard (if not already enabled)
2. **Create Umami account** and add environment variable
3. **Check dashboards** after a few hours to see data
4. **Track conversion goals** (form submissions, consultation bookings)

---

## Need Help?

- **Vercel Analytics Docs:** https://vercel.com/docs/analytics
- **Umami Docs:** https://umami.is/docs
- **Umami Cloud:** https://cloud.umami.is

Your analytics are now professional-grade and completely free! 🎉
