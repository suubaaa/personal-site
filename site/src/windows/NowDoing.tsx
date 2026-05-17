import Draggable from "react-draggable";
import { useRef } from 'react';

export default function NowDoing() {
  const nodeRef = useRef(null);
  
    return(
      <Draggable grid={[5,5]} handle=".title-bar" nodeRef={nodeRef}>
    <div ref={nodeRef} className="window absolute left-72 top-1/4" style={{ width: 300 }}>
        <div className="title-bar">
          <div className="title-bar-text">now doing..</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div className="window-body leading-relaxed">
          <details>
            <summary>anime</summary>
            <ul className="tree-view">
              <li>
                <details>
                  <summary>seasonals</summary>
                    <ul>
                      <li>liar game - episode 6</li>
                      <li>witch hate atelier - episode 4</li>
                      <li>marriage toxin - epsiode 4</li>
                      <li>akane-banashi - episode 1</li>
                    </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>others</summary>
                    <ul>
                      <li>hidamari sketch - starting</li>
                      <li>and yet the town moves - episode 2</li>
                    </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>rewatching</summary>
                    <ul>
                      <li>i don't have THAT much time...</li>
                    </ul>
                </details>
              </li>
            </ul>
          </details>

          <details>
            <summary>books & manga</summary>
            <ul className="tree-view">
              <li>
                <details>
                  <summary>books</summary>
                    <ul>
                      <li>the picture of dorian gray by oscar wilde</li>
                      <li>they city and its uncertain walls by haruki murakami</li>
                    </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>mangas</summary>
                    <ul>
                      <li>historie</li>
                      <li>holyland</li>
                      <li>the climber</li>
                    </ul>
                </details>
              </li>
            </ul>
          </details>

          <details>
            <summary>video games</summary>
            <ul className="tree-view">
              <li>final fantasy 14 - level 65</li>
              <li>league of legends - gold 4</li>
            </ul>
          </details>
          <p className="font-light">last updated may 11, 2026</p>
        </div>
      </div>
      </Draggable>
    )
}