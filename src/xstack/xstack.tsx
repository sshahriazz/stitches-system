import { forwardRef } from "react";
import { Stack } from "../stack/stack";
import { Props } from "../stack/stack";

export const XStack = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Omit<Props, "direction">>
>((props, ref) => <Stack ref={ref} direction="row" {...props} />);

export default XStack;
