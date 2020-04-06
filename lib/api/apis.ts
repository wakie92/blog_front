import { Post, PutPostType } from './../../store/modules/post/types';
import { firebaseDB } from '../../config/init-firebase';

const db = firebaseDB().firestore();
const blogDB = db.collection("blogDB");

export const GetPostsList = async <T>(cnt: number): Promise<T[]> => {
	const query = blogDB.where("id", "<=", cnt).orderBy("id", "desc");
	const response: T[] = await query.get().then((querySnapshot) => {
			return querySnapshot.docs.map((data) => {
				const ele: T = data.data() as T;
				return ele;
			});
		}).catch((e) =>  console.log(e)) as T[];
	return response;
};

export const PutPost = async ({post, id}: PutPostType) => {
	const query = blogDB.doc(id);
	const response = await query.set(post).then((res) => {
		return 'success';
	}).catch((err) => {
		return err;
	});
	return response.data;
};

export const PostUpdate = async (data: Post) => {
	const response: string = await blogDB.add(data)
		.then((res) => {
			return res.id;
		}).catch((err) => {
			return err;
		});
	return response;
};

export const GetPost = async (index: number) => {
	const query = blogDB.where("id", "==", index);
	const response = await query.get().then((doc) => {
		return { 
			res: doc.docs[0].data() as Post, 
			resId: doc.docs[0].id 
		};
	});
	return response;	
};

export const DeletePost = async (id: string) => {
	const query = blogDB.doc(id);
	const response = await query.delete().then(() => {
		return 'success';
	}).catch((err) => {
		return err;
	})
	return response;
};

export type LoginType = {
	message: string;
};
