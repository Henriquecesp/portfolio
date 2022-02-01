import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,500;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument