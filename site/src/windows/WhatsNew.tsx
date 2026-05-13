import Draggable from "react-draggable";
import { useRef } from 'react';

export default function WhatsNew() {
  const nodeRef = useRef(null);

    return(
      <Draggable handle=".title-bar" nodeRef={nodeRef}>
        <div ref={nodeRef} className="window absolute bottom-16 right-4" style ={{ width: 300 }}>
          <div className="title-bar">
            <div className="title-bar-text">what's new</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>
        
          <div className="window-body leading-relaxed" style={{ height: 200, overflowY: 'auto' }}>
            <ul>
              <li>
                <span className="font-bold text-sm">
                  windows are now draggable!
                </span>
                <br /> 
                  windows can now be dragged around the screen! also some refactoring the code to make it easier to manage.. but thats boring stuff..
                < br/>
                <span className="text-right">
                  may 13, 2026
                </span>
                <hr />
                </li>
              <li>
                <span className="font-bold text-sm">
                  new window added - this one!
                </span>
                <br /> 
                  added a window to help keep track of progress for the site. should be very fun to see it become huge one day. note to self: refactor code...
                < br/>
                <span className="text-right">
                  may 12, 2026
                </span>
                <hr />
                </li>
              <li>
                <span className="font-bold text-sm">
                  new project added
                </span>
                <br /> 
                  site that recommmends anime to you based off of your anilist profile. takes your anime list rated 7+ and asks an ai (sorry, im lazy) to rec animes.
                < br/>
                <span className="text-right">
                  may 12, 2026
                </span>
                <hr />
                </li>
              <li>
                <span className="font-bold text-sm">
                  new window added!
                </span>
                <br /> 
                  added a now doing window that shows my progress of stuff im watching/reading/playing.
                < br/>
                <span className="text-right">
                  may 11, 2026
                </span>
                <hr />
                </li>
            </ul>
          </div>
        </div>
      </Draggable>
    )
}