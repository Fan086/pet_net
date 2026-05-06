import "./globals.css";

export const metadata = {
  title: "泡泡爪宠物洗护店",
  description: "泡泡爪宠物洗护店，提供宠物友好的洗护、造型修剪和猫咪舒缓护理。",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
