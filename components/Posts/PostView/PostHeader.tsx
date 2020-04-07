import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Maybe from "../../Maybe/Maybe";
import Button from "../../CommonUI/Button";
import { colors } from "../../../lib/styles/global";
import { formatDate } from "../../../lib/Utils/utils";

type PostHeaderProps = {
  date: string;
  isLogged: boolean;
  id: string;
  setEditMode: Dispatch<SetStateAction<boolean>>; 
	reqDeletePost: () =>  void;
}
const PostHeader = ({ 
  date, 
  isLogged, 
  id,
  setEditMode, 
  reqDeletePost 
}: PostHeaderProps) => {
  return (
    <Wrapper className="reg-div">
		  <span className="reg-date">{formatDate(date)}</span>
		  <Maybe isVisible={isLogged}>
		  	<div className="">
		  		<Button 
		  			type="button" 
		  			size="medium" 
		  			bgColor={colors.gray1} 
		  			onClick={() => setEditMode(true)}
		  		>
		  			수정
		  		</Button>
		  		<Button 
		  			type="button" 
		  			size="medium" 
		  			bgColor={colors.gray1} 
		  			onClick={() => reqDeletePost()}
		  		>
		  			삭제
		  		</Button>
		  	</div>
		  </Maybe>
		</Wrapper>
  )
}

export default PostHeader;

const Wrapper = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		font-family: inherit;
  }
  .reg-date {
    color: ${colors.gray5};
  }
`