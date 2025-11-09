import './globals.css';

export const metadata = {
  title: 'YouTube Video Summaries',
  description: 'Summaries of YouTube videos in English, Russian, and Polish',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
