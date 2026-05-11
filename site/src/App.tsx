import { useState } from "react";
import Taskbar from "./components/Taskbar"

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('/background.jpg')` }} />
      <div className="window absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="window" style={{ width: 400 }}>
          <div className="title-bar">
            <div className="title-bar-text">
              Suba's fun site!
            </div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"/>
              <button aria-label="Maximize"/>
              <button aria-label="Close"/>
            </div>
          </div>
        
          <div className="window-body">
            <menu role="tablist">
              <button aria-selected={activeTab === "home"} onClick={() => setActiveTab("home")}>
                home
              </button>
              <button aria-selected={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
                projects
              </button>
              <button aria-selected={activeTab === "links"} onClick={() => setActiveTab("links")}>
                links
              </button>
            </menu>

            <article role="tabpanel" id="home" hidden={activeTab !== "home"}>
              <h3>hi, welcome!</h3>
              <p>thanks for coming </p>
              <img src="/sabergif4.gif" />
              <p>despite my moody twitter page, i like to have fun and not be serious and this is a good way to show that.</p>
              <p>a bit about me:</p>
                <p>• i enjoy watching anime and reading manga, altho haven't had change to enjoy lately..</p>
                <p>• i enjoy reading visual novels, but im noob so haven't read much beyond tsukihime (remake), mahoyo, and some of subahibi</p>
                <p>(no correlation to my name)</p>
                <p>• i enjoy very grindy games because im a natural slave and league of legends.</p>
              <p>a bit about the site:</p>
                <p>i want to use this site to show off any fun project i made</p>
                <p>the site is pretty bare bones and empty, but with time, it'll fill up :)</p>
            </article>
            
            <article role="tabpanel" id="projects" hidden={activeTab !== "projects"}>
              <h3>my projects</h3>
              <img src="/sabergif2.gif" />
              <a href="https://github.com/suubaaa/trace.moe-discord-bot" target="_blank" className="text-2xl">
                trace.moe discord bot
              </a>
              <p>a small little project i made connecting the trace.moe api to a discord bot.</p>
              <p>you can take a screenshot of an anime, and run a command, and the bot will tell you what anime it's from and where the moment in your screenshot happens</p>
              <a href="https://github.com/suubaaa/personal-site" target="_blank" className="text-2xl">
                suba's personal site
              </a>
              <p>what more do you want to know? you're using it!</p>
              <p>more coming soon..</p>
            </article>

            <article role="tabpanel" id="projects" hidden={activeTab !== "links"}>
              <h3>my socials/links</h3>
              <img src="/sabergif3.gif" />
              <p className="text-2xl text-sky-500">twitter</p>
                <a href="https://x.com/suuubaaaa" target="_blank">@suuubaaaa</a>
              <p className="text-2xl text-gray-900">github</p>
                <a href="https://github.com/suubaaa">@suubaaa</a>
              <p className="text-2xl text-blue-400">anilist</p>
                <a href="https://anilist.co/user/cyyberian/">@cyyberian</a>
              <p className="text-2xl text-sky-800">rateyourmusic</p>
                <a href="https://rateyourmusic.com/~cyyberia">@cyyberia</a>
              <p className="text-2xl text-indigo-500">discord</p>
                <p>ON A NEED TO KNOW BASIS!!!!!!!!!</p>
            </article>
          </div>
        </div>
      </div>
      <Taskbar /> 
    </div>
  );
}