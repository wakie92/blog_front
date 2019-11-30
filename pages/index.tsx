import Link from 'next/link';
import { PostsLayout } from '../components/Posts';
import { Intro } from '../components/Intro';
import { ROUTES } from '../lib/Routes/Routes';
const Home = () => (
  <>
    <Link href={ROUTES.about}>
      <a>
        <h1>자기소개 컴포넌트</h1>
      </a>
    </Link>
    <PostsLayout />
  </>
);
export default Home;
