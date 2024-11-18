// declarations.d.ts

// Khai báo cho SVG
declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}

declare module 'md5' {
    export default function md5(message: string): string;
}
// Khai báo cho PNG và JPG
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";