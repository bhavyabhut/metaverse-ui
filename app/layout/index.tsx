import '../styles/globals.css';

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html lang='en'>
    <head>
      <link rel='preconnect' href='https://stijndv.com' />
      <link
        rel='stylesheet'
        href='https://stijndv.com/fonts/Eudoxus-Sans.css'
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
