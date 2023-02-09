import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

export default function Home() {
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
    return (
    <>
      <h1 className="title">MythicXGN</h1>
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://cdn.glitch.global/4864c847-f672-4f8b-8a68-6b2b7034d9f5/302159851_619884536416648_5777764430964476167_n.jpg?v=1664224024470"
          className="avatar"
        />
      </animated.div>
        <br></br>
        <section class="container">
          <div class="jumbotron bg-dark">
            <section class="me"><p>Hello My name is Thomas Tomlinson, I go by MythicXGN it has been my gamer tag for years now. I am happily taken by the love of my life who is in the picture above you. This is my personal webpage where I will be posting bot updates, game updates etc. The community discord can be found in the about us section on this page.</p></section>
          </div>
        </section>
    </>
  );
}