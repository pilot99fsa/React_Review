// Hooksなど
import { useEffect } from "react";
import gsap from "gsap"; //GreenSock Animation Platformで、アニメーションを簡単に実装できるJavaScriptのライブラリ
import { ScrollTrigger } from "gsap/all";// gsapのプラグインで、スクロールに応じたトリガー(スクラブアニメーション)を作成するのに使用される
import "./style.css";

// 画像のインポート
import image1 from "./images/deep_sea.jpg";
import image2 from "./images/sunset.jpg";
import image3 from "./images/windowsxp.jpg";

export const Parallax = () => {
    const { innerHeight } = window;

    const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray("section").forEach((section, i) => {
            section.bg = section.querySelector(".bg");

            gsap.fromTo(
                section.bg,
                {
                    backgroundPosition: () =>
                        i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
                },
                {
                    backgroundPosition: () =>
                        `50% ${innerHeight * (1 - getRatio(section))}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: () => (i ? "top bottom" : "top top"),
                        end: "bottom top",
                        scrub: true,
                        // アニメーションの開始と終了の条件、スクラブ（スクロール速度に合わせてアニメーションを行う）などを設定
                    },
                }
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section>
                <div className="bg" style={{ backgroundImage: `url(${image1}` }} />
                <h1>水族館</h1>
            </section>
            <section>
                <div className="bg" style={{ backgroundImage: `url(${image2}` }} />
                <h1>夕焼けの荒野</h1>
            </section>
            <section>
                <div className="bg" style={{ backgroundImage: `url(${image3}` }} />
                <h1>Windows XP</h1>
            </section>
        </>
    );
};