import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValue, addTagArr } from "../../store/modules/postUI";
import { Head } from "../../components/Write";
import SubTitleInput from "../../components/Write/SubTItleInput";
import TagAndImg from '../../components/Write/TagAndImg';
import { addPhoto } from "../../lib/Utils/S3";
import { RootState } from "../../store/modules";


type EditorHeaderProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
}
const EditorHeaderContainer = ({ onChange, onUpload }: EditorHeaderProps) => {
  const dispatch = useDispatch();
  const { postWrite } = useSelector((state: RootState) => ({
    postWrite: state.postUI.postWrite,
  }))
  const handleTags = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 188 && postWrite.tag !== ',') {
      dispatch(addTagArr());
    }
  }, [dispatch, postWrite.tag]);
  
  const reqImgUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const bucketData: string | void = await addPhoto(e);
    if (typeof bucketData === 'string') {
      dispatch(getValue({ name: 'imgUrl', value: bucketData }));
    }
  }, [dispatch]);

  const reqGetImgUrl = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const bucketData: string | void = await addPhoto(e);
    if (typeof bucketData === 'string') {
      const imgMarkdown = `![](${bucketData})`;
      dispatch(getValue({ name: 'inputValue', value: `${postWrite.inputValue} ${imgMarkdown}` }));
    }
  }, [dispatch, postWrite.inputValue]);
  console.log(postWrite);
  return (
    <>
      <Head onUpload={onUpload} title={postWrite.title} onChange={onChange} reqImgUpload={reqImgUpload} />
      <SubTitleInput subTitle={postWrite.subTitle} onChange={onChange} />
      <TagAndImg
        reqGetImgUrl={reqGetImgUrl}
        tag={postWrite.tag}
        tagArr={postWrite.tagArr}
        onChange={onChange}
        onAddTag={handleTags}
      />
    </>
  )
}

export default EditorHeaderContainer;