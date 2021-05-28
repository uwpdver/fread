import {
  IPanelProps,
  IPanelStyleProps,
  IPanelStyles,
  IStyleFunctionOrObject,
  mergeStyleSets,
  Panel,
  PanelType,
} from "@fluentui/react";

const HelfScreenPanel: React.FunctionComponent<IPanelProps> = ({
  isOpen,
  children,
  styles,
  ...rest
}) => {
  
  const defaultStyles: IStyleFunctionOrObject<IPanelStyleProps, IPanelStyles> =
    {
      overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      main: [
        `rounded-t-lg ${
          isOpen ? "ms-motion-slideUpIn" : "ms-motion-slideDownOut"
        }`,
        {
          height: "75vh",
          margin: "auto 0 0",
          animationName: "none",
        },
      ],
      content: "px-0",
      scrollableContent: "scrollbar-none",
    };

  return (
    <Panel
      isOpen={isOpen}
      type={PanelType.smallFluid}
      styles={mergeStyleSets(defaultStyles, styles)}
      {...rest}
    >
      {children}
    </Panel>
  );
};

export default HelfScreenPanel;
