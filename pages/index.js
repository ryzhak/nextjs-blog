import Head from 'next/head';
import Link from 'next/link';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import config from '../package.json';

const COMMIT_HASH = process.env.COMMIT_REF;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          App version (COMMIT_REF): <a href={`https://github.com/ubiquity/ubiquity-dollar/commit/${COMMIT_HASH}`} target="_blank">
            1.0.0
          </a>
        </p>
        <p>
          App version (COMMIT_REF): <a href={`https://github.com/ubiquity/ubiquity-dollar/commit/${COMMIT_HASH}`} target="_blank">
            1.0.0
          </a>
        </p>
        <div id="CommitURL">
            <a
              href={`https://github.com/ubiquity/ubiquity-dollar/commit/${COMMIT_HASH}`}
              target="_blank"
            >
              {COMMIT_HASH}
            </a>
          </div>
        <div id="CommitURL">
          <a
            href={`https://github.com/ubiquity/ubiquity-dollar/commit/${COMMIT_HASH}`}
            target="_blank"
          >
            {COMMIT_HASH ? COMMIT_HASH.substring(0,8) : ''}
          </a>
        </div>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
