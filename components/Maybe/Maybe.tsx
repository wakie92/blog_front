import { ReactChildren } from "react";

type MaybeProps = {
  isVisible: any,
  children: ReactChildren | JSX.Element,
}
const Maybe = ({ isVisible, children }: MaybeProps) => {
  return <>
  {isVisible && children}
  </>
};
export default Maybe;