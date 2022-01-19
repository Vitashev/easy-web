import Link from 'next/link';
import './index.module.scss';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome to About!</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}

export default About;
