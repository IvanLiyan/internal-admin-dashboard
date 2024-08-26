import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {process.env.NEXT_PUBLIC_ENV !== "dev" && (
          <Script id="ali-monitor" strategy="lazyOnload">
            {`!(function(c,b,d,a){c[a]||(c[a]={});c[a].config=
          {
            pid:"ex0iaqfvtf@cacf83f59bede27",
            appType:"web",
            imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",
            sendResource:true,
            enableLinkTrace:true,
            behavior:true
          };
        with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)
        })(window,document,"https://sdk.rum.aliyuncs.com/v1/bl.js","__bl");`}
          </Script>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
