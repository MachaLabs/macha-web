export const commonStyle = {
  borderRadius: "5px",
  borderRadiusButton: "5px",
  borderRadiusTag: "5px",
  borderRadiusCard: "5px",
  borderRadiusInput: "5px",
  borderRadiusPallet: "5px",
  borderRadiusModal: ".8rem",
  borderRadiusIcon: "5px",
  fontInput: "1.6rem",
  fontSubHeading: "1.3rem",
  fontTag: "1.4rem",
  fontH1: "4.2rem",
  fontH2: "3.6rem",
  fontH3: "2.8rem",
  fontP: "1.6rem",
  fontPSmall: "1.6rem",
  fontPLarge: "2rem",
  sizeIconSmall: "35px",
  sizeIcon: "50px",
  sizeIconLarge: "75px",
  sizeLogo: "50px",
  sizeLogoSmall: "40px",
  sizeLogoLarge: "80px",
  paddingMain: "50px 0px 50px 0px",
  paddingInput: "0 1rem",
  paddingPallet: "1rem",
  paddingCard: "15px",
  paddingPannel: "15px",
  paddingPannelBody: "25px",
  paddingButton: "1rem 1.3rem",
  paddingButtonSmall: "0.8rem 1rem",
  paddingButtonXSmall: "0.5rem",
  paddingButtonLarge: "1rem 1.3rem",
  paddingDropdown: "1.3rem",
  paddingCover: "25px",
  paddingBanner: "0 35px",
  paddingModal: "2rem",
  paddingNav: "10px",
  marginModal: "75px auto",
  marginMain: "0px",
  marginMainTop: "0px",
  heightInput: "5rem",
  heightCover: "20rem",
  heightHeader: "75px",
  heightPlaceholder: "150px",
  widthSidebar: "300px",
  widthSidebarControl: "65px",
  widthMain: "calc(100%)",
  widthNav: "100%",
  widthSection: "85%",
  widthCardList: "calc(20% - 10px)",
  widthModal: "80%",

  mob: {
    fontH1: "2.6rem",
    fontH2: "2.2rem",
    fontH3: "2.1rem",
    fontP: "1.4rem",
    fontPSmall: "1.1rem",
    fontPLarge: "1.6rem",
    sizeLogo: "60px",
    sizeLogoSmall: "30px",
    sizeLogoLarge: "70px",
    marginModal: "15px auto",
    marginMain: "0px",
    paddingBanner: "0px 35px",
    paddingMain: "30px 0px 30px 0px",
    heightBanner: "15rem",
    heightCover: "10rem",
    widthMain: "100%",
    widthSection: "90%",
    widthCardList: "calc(50% - 10px)",
    widthModal: "100%",
  },
};

export const darkStyle = {
  bg1: "#00042C",
  bg2: "#181A20",
  bg3: "#16191B",
  bg4: "#111315",
  bg: "#000511",
  bgLayout: { primary: "#181A20", secondry: "#111315" },
  //
  brCard: {
    transparent: "#262A34",
    default: "#333",
    hover: "#555",
    active: "",
  },
  brButton: { active: "#2A85FF" },
  //
  color5: "#3182CE",
  bgMain: "#000511",
  bgModalOverlay: "#000320",
  bgOverlay:
    "linear-gradient(90deg, rgba(246,246,246,0.6) 0%, rgba(234,238,246,0.8) 44%, rgba(231,235,242,0.8) 100%)",
  bgSidebar: "#232323",
  bgSidebarMenu: "#232323",
  bgDropdown: "#202124",
  bgPannelHeader: "#00042C",
  bgPlaceholder: "#1D224A",
  border: "1px solid #0F172E",
  borderDark: "1px solid #232323",
  borderInput: "1px solid rgba(247,248,248,0.1)",
  borderCard: "1px solid RGBA(0, 0, 0, 0.20)",
  borderButton: "none",
  borderTag: "1px solid #333233",
  borderTagActive: "1px solid #50A7EA",
  borderLoaderLeft: "#3182ce",
  borderDropdown: "1px solid rgba(247,248,248,0.1)",
  borderPannel: "1px solid rgba(247,248,248,0.1)",
  borderModal: "1px solid rgba(247,248,248,0.1)",
  borderPallet: "1px solid rgba(247,248,248,0.1)",
  borderPlaceholder: "1px solid rgba(247,248,248,0.1)",
  blurOverlay: "3px",
  colorH: "#FFF",
  colorHAlt: "#FFF",
  colorP: "#EFEFEF",
  colorText: "#EFEFEF",
  colorSubHeading: "rgb(var(--neutral700-rgb,102,102,102))",
  colorPlaceholder: "#babdbe",
  colorButton: "#EFEFEF",
  colorButtonActive: "#333",
  colorButtonLight: "#F5F5F5",
  colorButtonLightHover: "#F5F5F5",
  colorButtonLightActive: "#333",
  colorInput: "#FFF",
  colorIcon: "#888",
  colorIconActive: "#333",
  focusInput: "0",
  header: {
    bg: { default: "#000511" },
    border: { default: "1px solid #0F172E" },
  },
  body: { bg: { default: "#000511" }, padding: "20px 10px" },
  nav: {
    width: "5%",
    height: "90%",
    bg: { default: "#000511" },
    border: { default: "1px solid #0F172E" },
  },
  list: {
    padding: '5px',
    bg: {
      default: 'transparent',
      hover:
        "linear-gradient(129.54deg, rgba(13, 33, 71, 0.66) 9.17%, rgba(11, 32, 73, 0.15) 94.25%)",
    },
    shadow: {
      default: '',
      hover: ' inset -1px 1px 4px rgba(17, 108, 230, 0.45), inset 1px -1px 4px rgba(17, 108, 230, 0.45);'
    }
  },
  card: {
    bg: {
      default: "#000416",
      highlight: "linear-gradient(129.54deg, rgba(13, 33, 71, 0.66) 9.17%, rgba(11, 32, 73, 0.15) 94.25%)",
      hover:
        "linear-gradient(141.09deg, rgba(13, 25, 65, 0.5) 11.08%, rgba(0, 20, 60, 0.38) 89.68%)",
    },
    border: {
      default: "1px solid rgba(15,23,46,1)",
      hover: "1px solid #001E57",
    },
    borderRadius: "5px",
    shadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      hover:
        "-1px 1px 4px rgba(17, 108, 230, 0.6),1px -1px 4px rgba(17, 108, 230, 0.6)",
    },
    padding: { default: "10px" },
  },
  pannel: { bg: { default: "" }, shadow: { default: "" } },
  input: {
    bg: { default: "#020a21" },
    border: { default: "1px solid #14244B" },
  },
  message: {
    bg: {
      default: "#000C29",
      active: "linear-gradient(100.07deg, #2A85FF 0.39%, #2448C7 73.45%)",
    },
    color: {
      default: "rgb(255, 255, 255)",
      heading: {
        color: {
          default: "#246bfd",
          active: "#FFF",
        },
      },
    },
    shadow: {
      default:
        "0px -2px 8px rgba(19, 112, 231, 0.15), 0px 2px 8px rgba(19, 112, 231, 0.15)",
      hover:
        "-1px 1px 4px rgba(17, 108, 230, 0.6),1px -1px 4px rgba(17, 108, 230, 0.6)",
    },
  },
  modal: {
    bg: { default: "#000511" },
    border: { default: "1px solid #0F172E" },
    shadow: { default: "" },
  },
  popover: { bg: { default: "#000511" } },
  sidebar: {},
  dropdown: {},
  avatar: {
    border: '2px solid #246bfd',
  },
  icon: {
    bg: {
      transparent: "transparent",
      default:
        "linear-gradient(129.54deg, rgba(13, 33, 71, 0.66) 9.17%, rgba(11, 32, 73, 0.15) 94.25%)",
      hover:
        "linear-gradient(129.54deg, rgba(13, 33, 71, 0.66) 9.17%, rgba(11, 32, 73, 0.15) 94.25%)",
      active: "",
    },
    borderRadius: "12px",
    shadow: {
      default: "inset 0 1px 0 0 hsl(0deg 0% 100% / 5%)",
      hover:
        "-1px 1px 4px rgba(17, 108, 230, 0.6),1px -1px 4px rgba(17, 108, 230, 0.6)",
    },
  },
  button: {
    bg: {
      transparent: "transparent",
      default: "linear-gradient(100.07deg, #197CEC 0.39%, #004AD9 73.45%)",
      hover: "#000C29",
      active: "linear-gradient(100.07deg, #2A85FF 0.39%, #2448C7 73.45%)",
      activeTranslucent:
        "linear-gradient(99.21deg, rgba(55, 121, 249, 0.66) 2.04%, rgba(28, 76, 244, 0.2) 95.15%);",
      disabled: "",
    },
  },

  shadowDropdown:
    "rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px",
};

export const style = { ...commonStyle, ...darkStyle };
