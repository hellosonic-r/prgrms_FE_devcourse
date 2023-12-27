// import { icons } from "feather-icons";
// import styled from "styled-components";

// export interface IIconProps {
//   name: string;
//   size?: number | string;
//   strokeWidth: number;
//   color: string;
// }

// // const IconWrapper = styled.i`
// //   display: inline-block;
// // `;

// const Icon = ({
//   name,
//   size = 16,
//   strokeWidth = 2,
//   color = "#222",
//   ...props
// }: IIconProps) => {
//   const shapeStyle = {
//     width: size,
//     height: size,
//   };
//   const iconStyle = {
//     "stroke-width": strokeWidth,
//     stroke: color,
//     width: size,
//     height: size,
//     ...props,
//   };
//   const icon = icons[name];
//   const svg = icon ? icon.toSvg(iconStyle) : "";
//   const base64 = btoa(svg);
//   return (
//     <i {...props} style={shapeStyle}>
//       <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
//     </i>
//   );
// };

// export default Icon;
