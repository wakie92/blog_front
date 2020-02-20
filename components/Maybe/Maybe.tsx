import { ReactChildren } from "react";

type MaybeProps = {
  isVisible: any,
  children: ReactChildren,
}
const Maybe = ({ isVisible, children }: MaybeProps) => {
  <>
  {isVisible && children}
  </>
};
export default Maybe;