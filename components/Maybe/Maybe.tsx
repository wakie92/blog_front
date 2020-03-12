import { ReactChildren, ReactFragment } from "react";

type MaybeProps = {
  isVisible: any,
  children: ReactChildren | JSX.Element | ReactFragment,
}
const Maybe = ({ isVisible, children }: MaybeProps) => {
  return <>
  {isVisible && children}
  </>
};
export default Maybe;