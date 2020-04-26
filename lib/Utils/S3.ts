import AWS from 'aws-sdk';
import { AWSConfig } from '../../configs/awsconfig';

const { albumBucketName, bucketRegion, IdentityPoolId } = AWSConfig
const paramKey = 'blog-oscar/images/';

AWS.config.region = bucketRegion; // 리전
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: IdentityPoolId
});
AWS.config.update({
	region: bucketRegion,
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: IdentityPoolId
	})
});

export const addPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
	const file = e.target.files[0];
	const upload = new AWS.S3.ManagedUpload({
		params: {
			Bucket: albumBucketName,
			Key: `${paramKey}${file.name}`,
			Body: file,
			ACL: 'public-read'
		}
	});

	const result = upload.promise();
	const url: Promise<string | void> = result.then(
		(data: AWS.S3.ManagedUpload.SendData) => {
			alert('사진이 등록되었습니다.');
			return data.Location;
		},
		(err: Error) => {
			alert(`${err.message}`);
		}
	);
	return url;
};
