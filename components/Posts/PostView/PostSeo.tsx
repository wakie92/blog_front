import Head from 'next/head';
import { HOME_URL } from '../../../lib/Constant';
import { Post } from '../../../store/modules/post';

type PostSeoProps = {
	data: {
		res: Post;
		resId: string;
	};
};
const PostSeo = ({ data }: PostSeoProps) => {
	const { res, resId } = data;
	const { title, subTitle, content, imgUrl, tagArr } = res;


  //배열의 마지막 element만 붙는중
  // const TagMeta = tagArr.map(tag => 
  //   <meta name="keyword" content={`${tag} ++`} key={tag} />
  // )
	return (
		<Head>
			<title>{title}</title>
			<meta name="og:title" content={title} />
			{subTitle && <meta name="description" content={subTitle} />}
			{subTitle && <meta name="og:description" content={subTitle} />}
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content={content} />
			<meta name="og:description" content={content} />
			<meta name="og:url" content={`${HOME_URL}/dev/blog/${resId}`} />
			{imgUrl && <meta name="og:image" content={imgUrl} />}
      {/* {TagMeta} */}
		</Head>
	);
};

export default PostSeo;
