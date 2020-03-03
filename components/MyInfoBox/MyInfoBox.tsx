import styled from 'styled-components';

const MyInfoBox = () => {
	return (
		<Wrapper>
			<div className="info">
				<img />
				<div className="intro">안녕하세요 웃으면서도 짜증내면서도 개발하는 이창훈입니다.</div>
			</div>
			<div className="sns" />
		</Wrapper>
	);
};

const Wrapper = styled.div`display: flex;`;
