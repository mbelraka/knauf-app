This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Knauf Blogs

A react nextjs app using typescript. The app was meant as a working sample for an application for a role at Knauf.

The app was implemented using:

- SOLID:

  - Single Responsibility: Every file should be doing only one function, markup for markups, styles for styles and ts
    for coding. No inline styling. No logic in template...etc.
  - Open for extension / closed for modification: The application should be fully configurable. The parameters are in
    docs that could be later connected to a content management system later also. Also, the app was done using
    different modules that could be taken into other applications and also be lazy loaded
  - Liskov Substitution: All the application following a hierarchy that works for it.
  - Interface: Joint logic among classes are introduced in different elements that are being implemented by them
  - Dependency injection: All the injectables are done as one element provifded in root and incjected to all elements

- Atomic Design: The element doesn't use just one element, but a container including inside it another atomic components
  that could be re-used in order to reduce the amount of elements being loaded

- Material Design: it applies material design rules.

- State Management: The application uses observables in order to keep the real-time elements
- Responsiveness: The application should work for all screen sizes

## Running the application

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
