import { forwardRef } from "react";
import Stack from "../stack/stack";
import { Props } from "../stack/stack";

export const YStack = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Omit<Props, "direction">>
>((props, ref) => <Stack ref={ref} direction="column" {...props} />);

export default YStack;
