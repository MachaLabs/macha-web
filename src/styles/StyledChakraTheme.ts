import { extendTheme } from "@chakra-ui/react";
import { style } from "./StyledConstants";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: {
      html: {
        background: `${style.bgMain}`,
      },
      "h1, h2, h3, h4, h5, h6": {
        color: `${style.colorH}`,
      },
      "div, p, span": {
        color: `${style.colorP}`,
      },
      "*::placeholder": {
        color: `${style.colorPlaceholder}`,
      },
      "textarea": {
        border: `${style.input.border.default} !important`,
        color: `${style.colorInput} !important`,
        background: `${style.input.bg.default} !important`,
        paddingLeft: "0.5rem !important",
        paddingRight: "0.5rem !important",
      },
      "input:focus": {
        background: '#000'
      },
      ".chakra-modal__content": {
        // borderLeft: `${style.modal.border.default} !important`,
      },
      ".chakra-modal__body": {
        background: `${style.modal.bg.default}`,
        paddingTop: "1rem !importannt",
      },
      ".chakra-modal__header": {
        background: `${style.modal.bg.default}`,
        borderBottom: `${style.modal.border.default} !important`,
      },
      ".chakra-modal__footer": {
        background: `${style.modal.bg.default}`,
        borderTop: `${style.modal.border.default} !important`,
      },
      ".chakra-modal__overlay": {
        opacity: "0.65 !important",
        background: `${style.modal.bg.default} !important`,
      },
      ".alert": {
        background: `${style.bgPannelHeader}`,
      },
    },
  },
  textStyles: {},
  components: {
    Input: {
      baseStyle: {
        field: {
          bg: `${style.input.bg.default}`,
          border: `${style.input.border.default}`,
          _hover: {
            border: `${style.input.border.active}`,
            bg: `${style.input.bg.active}`,
          },
          _focusVisible: {
            border: `${style.input.border.active}`,
            bg: `${style.input.bg.active}`,
            shadow: `${style.input.shadow.hover}`
          },
        },
      },
      variants: {
        normal: {
          field: {
            bg: `${style.input.bg.default}`,
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "normal",
      },
    },
    TextArea: {
      Input: {
        baseStyle: {
          field: {
            bg: `${style.input.bg.default}`,
            border: `${style.input.border.default}`,
            _hover: {
              border: `${style.input.border.active}`,
              bg: `${style.input.bg.active}`,
            },
            _focusVisible: {
              border: `${style.input.border.active}`,
              bg: `${style.input.bg.active}`,
              shadow: `${style.input.shadow.hover}`
            },
          },
        },
        variants: {
          normal: {
            field: {
              bg: `${style.input.bg.default}`,
            },
          },
        },
        defaultProps: {
          size: "md",
          variant: "normal",
        },
      },
      variants: {
        normal: {
          field: {
            bg: `${style.input.bg.default}`,
          },
        },
      },
    },
    Button: {
      baseStyle: {
        background: `${style.button.bg.default}`,
      },
      variants: {
        transparent: {
          background: "transparent",
          opacity: "0.5",
          _hover: {
            background: `${style.button.bg.default}`,
            opacity: "1",
          },
        },
        state_default_hover: {
          background: `${style.card.bg.default}`,
          border: `${style.card.border.default}`,
          shadow: `${style.card.shadow.default}`,
          _hover: {
            background: `${style.card.bg.hover}`,
            border: `1px solid ${style.card.border.hover}`,
            shadow: `${style.card.shadow.hover}`,
          },
        },
        state_default_to_brand: {
          background: `${style.button.bg.default}`,
          _hover: {
            background: `${style.button.bg.active}`,
            color: "#FF",
          },
        },

        state_transparent_to_brand_hover: {
          background: "transparent",
          border: `1px solid transparent`,
          cursor: "pointer",
          _hover: {
            background: `${style.button.bg.activeTranslucent}`,
            border: `1px solid ${style.brButton.active}`,
            color: "#FFF",
          },
        },
        state_brand: {
          background: `${style.button.bg.active}`,
          color: "#FF",
        },
        state_brand_hover: {
          background: `${style.button.bg.activeTranslucent}`,
          border: `1px solid ${style.brButton.active}`,
          color: "#FFF",
        },
        state_card: {
          background: `${style.card.bg.default}`,
          border: `${style.card.border.default}`,
          shadow: `${style.card.shadow.default}`,
        },
        state_card_hover: {
          background: `${style.card.bg.default}`,
          border: `${style.card.border.default}`,
          shadow: `${style.card.shadow.default}`,
          _hover: {
            background: `${style.card.bg.hover}`,
            border: `1px solid ${style.card.border.hover}`,
            shadow: `${style.card.shadow.hover}`,
          },
        },
        state_list: {
          background: `${style.card.bg.default}`,
          borderRadius: "5px",
          borderBottom: `${style.card.border.default}`,
          shadow: `${style.card.shadow.default}`,
        },
        state_list_hover: {
          background: `${style.card.bg.default}`,
          borderBottom: `${style.card.border.default}`,
          shadow: `${style.card.shadow.default}`,
          borderRadius: "10px",
          _hover: {
            background: `${style.card.bg.hover}`,
            borderBottom: `10px solid ${style.card.border.hover}`,
            shadow: `${style.card.shadow.hover}`,
          },
        },
        state_list_active: {
          background: `${style.button.bg.active}`,
          color: "#FF",
          borderRadius: "10px",
          borderBottom: `${style.card.border.default}`,
          shadow: `${style.card.shadow.default}`,
        },
        state_lens: {
          opacity: "0.95",
          background: "#ABFD2C",
          color: "#1A202C",
          _hover: {
            opacity: "1",
          },
        },
        state_lens_unfollow: {
          opacity: "0.95",
          background: "#C22D3F",
          color: "#FFFFFF",
          _hover: {
            opacity: "1",
          },
        },
        state_xmtp: {
          opacity: "0.95",
          background: `linear-gradient(91.55deg, #FC4F37 -5.05%, #31006E 105.58%)`,
          color: "#fff",
          _hover: {
            opacity: "1",
          },
        },
      },
      defaultProps: {
        colorScheme: "whiteAlpha",
      },
    },
    Tag: {
      baseStyle: {
        background: `${style.button.bg.default}`,
        cursor: "pointer",
      },
      defaultProps: {
        colorScheme: "whiteAlpha",
      },
      variants: {
        state_xmtp: {
          opacity: "0.95",
          background: `linear-gradient(91.55deg, #FC4F37 -5.05%, #31006E 105.58%)`,
          color: "#fff",
          _hover: {
            opacity: "1",
          },
        }
      }
    },
    Menu: {
      baseStyle: {
        list: {
          bg: `${style.bgDropdown}`,
          border: `${style.borderDropdown}`,
          minW: "5xs",
          zIndex: 1000,
        },
        item: {
          _focus: {
            bg: `${style.button.bg.default}`,
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        overlay: {
          background: `${style.modal.bg.default}`,
          opacity: "1",
        },
        dialogContainer: {
          alignItems: "center",
        },
      },
      sizes: {},
    },
    Toast: {
      defaultProps: {
        colorScheme: "whiteAlpha",
      },
    },
    Popover: {
      baseStyle: {
        content: {
          width: "3xs",
          bg: `${style.popover.bg.default}`,
          border: "1px solid",
          borderColor: "gray.800",
        },
      },
    },
  },
});

export default theme;
