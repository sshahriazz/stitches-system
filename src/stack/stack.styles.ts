import { styled, VariantProps } from "../theme";

const CLASS_NAME = "--stack";

export const StyledStack = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  // overflow: "auto",
  boxSizing: "border-box",

  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    grow: {
      true: {
        flexGrow: 1,
      },
      false: {},
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
      false: {},
    },
    sticky: {
      true: {
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "$coal100",
      },
      false: {},
    },
    DEV_outline: {
      true: {
        outline: "2px solid rgba(0, 0, 255, 0.4)",
        [`& .${CLASS_NAME}`]: {
          outline: "2px solid rgba(0, 0, 255, 0.4)",
        },
      },
      false: {},
    },
  },
  compoundVariants: [],
});

export type StyledStackVariantsProps = VariantProps<typeof StyledStack>;

export default StyledStack;
