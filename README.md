# ClerkAuth - Next.js Authentication Boilerplate

  <h3>Secure Authentication Made Simple</h3>
  <p>A modern, production-ready authentication boilerplate built with Next.js 14, Clerk, and Tailwind CSS.</p>

![ClerkAuth Preview](/public/landing.png)

## Features

- Built with Next.js 14 App Router
- Secure authentication with [Clerk](https://clerk.com)
- Sleek UI with Tailwind CSS
- Fully responsive design
- Protected routes with middleware
- Fast page transitions
- Dashboard layout with sidebar navigation for authenticated users
- Dark mode ready
- SEO optimized
- Performance monitoring with Vercel Speed Insights

## Quick Start

### Prerequisites

- Node.js 18.18.0 or later
- npm or yarn
- A Clerk account (free)

### Environment Variables

Create a `.env.local` file in the root directory with your Clerk credentials:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxx
```

You can get these keys from your [Clerk Dashboard](https://dashboard.clerk.com).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DanielDallas/clerk-auth-system.git
cd clerk-auth-system
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
clerk-auth-system/
├── app/                     # Next.js 14 App Router
│   ├── dashboard/          # Protected dashboard routes
│   │   ├── layout.tsx     # Dashboard layout with sidebar
│   │   ├── page.tsx       # Main dashboard page
│   │   ├── users/        # User management
│   │   ├── settings/     # Settings page
│   │   └── help/         # Help & documentation
│   ├── sign-in/          # Sign in page
│   ├── sign-up/          # Sign up page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
├── lib/                   # Utility functions
├── public/               # Static files
├── styles/              # Global styles
├── middleware.ts        # Clerk authentication middleware
└── tailwind.config.js   # Tailwind configuration
```

## Authentication Flow

1. Users can sign up or sign in using Clerk's pre-built components
2. Protected routes are handled by middleware
3. Unauthorized access redirects to the sign-in page
4. After authentication, users are redirected to the dashboard
5. Session management is handled automatically by Clerk

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#232363",
        // Add more color variations
      },
    },
    // Add more theme customizations
  },
}
```

### Clerk Theme

You can customize Clerk's UI components using the `appearance` prop:

```typescript
<SignIn
  appearance={{
    elements: {
      rootBox: "mx-auto",
      card: "shadow-lg",
      // Add more custom styles
    },
  }}
/>
```

## Performance

- Built with React Server Components
- Optimized image loading
- Efficient route handling
- Minimal client-side JavaScript
- Performance monitoring with Vercel Speed Insights

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)

## Contact

Daniel Dallas - [LinkedIn](https://www.linkedin.com/in/danieldallasokoye/) - [@thedanieldallas](https://twitter.com/thedanieldallas)

Project Link: [https://github.com/danieldallas/clerk-auth-system](https://github.com/danieldallas/clerk-auth-system)
