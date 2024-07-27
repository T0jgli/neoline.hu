import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <head>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
      <style>
        .motion { opacity: 1 !important }
      </style>
    `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
