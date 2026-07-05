import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const title = "Sahitya Biswas | Data Scientist & AI Engineer";
  const desc = "Mathematics graduate pursuing MSc in Data Science and AI. Building AI systems across deep learning, NLP, and reinforcement learning.";
  const url = "https://sahityabiswas.dev";
  const image = `${import.meta.env.BASE_URL}profile.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content="Data Science, AI, Machine Learning, Deep Learning, NLP, Portfolio, Sahitya Biswas" />
      <meta name="author" content="Sahitya Biswas" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
