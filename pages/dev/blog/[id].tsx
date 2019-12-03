import Header from '../../../components/CommonUI/Header';
import PostView from '../../../components/Posts/PostView/PostView';

export default function Post() {
  const test =
  "<h1>Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io). </h1>";

  return (
    <>
      <Header />
      <PostView test={test}/>
    </>
  )
}
