import Head from 'next/head';
import ReviewForm from '../components/ReviewForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Review Form</title>
        <meta name="description" content="A simple review form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <ReviewForm />
      </main>
    </div>
  );
}
