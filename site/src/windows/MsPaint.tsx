// FOR COMPLETE AND TOTAL TRANSPARENCY, I USED AI TO HANDLE MUCH OF THE CODEMONKEY WORK HERE!!

import Draggable from "react-draggable";
import { useRef, useState, useEffect } from 'react';

const COLORS = [
  '#000000', '#808080', '#800000', '#808000',
  '#008000', '#008080', '#000080', '#800080',
  '#ffffff', '#c0c0c0', '#ff0000', '#ffff00',
  '#00ff00', '#00ffff', '#0000ff', '#ff00ff',
  '#ff8000', '#804000', '#004000', '#004040',
];

export default function MsPaint() {
    const nodeRef = useRef(null);
    const canvasRef = useRef(null);
    const lastPos = useRef({ x: 0, y: 0 });
    
    const [mouseDown, setMouseDown] = useState(false);
    const [color, setColor] = useState('black');
    const [tool, setTool] = useState('brush');
    
    const onMouseDown = (e) => {
        setMouseDown(true);
        lastPos.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    }
    const onMouseUp = () => setMouseDown(false);

    const onMouseMove = (e) => {
        if (!mouseDown) return;
        const context = canvasRef.current.getContext('2d');
        context.strokeStyle = tool === 'eraser' ? 'white' : color;
        context.lineWidth = tool === 'eraser' ? 16 : 2;
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(lastPos.current.x, lastPos.current.y);
        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
        lastPos.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    }

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, 380, 300);
    }, []);

    return(
        <Draggable grid={[5,5]} handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window absolute bottom-24 left-24">
                <div className="window" style={{ width: 440 }}>
                    <div className="title-bar">
                        <div className="title-bar-text">shitty ms paint copy</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"/>
                            <button aria-label="Maximize"/>
                            <button aria-label="Close"/>
                        </div>
                    </div>
                    <div className="window-body" style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 4 }}>
                        <div style={{ display: 'flex', gap: 4 }}>
                            <canvas
                                ref={canvasRef}
                                width={380} height={300}
                                style={{ width: 380, height: 300, cursor: tool === 'eraser' ? 'cell' : 'crosshair' }}
                                onMouseDown={onMouseDown}
                                onMouseUp={onMouseUp}
                                onMouseLeave={onMouseUp}
                                onMouseMove={onMouseMove}
                            />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, alignContent: 'start' }}>
                                {COLORS.map(c => (
                                    <div
                                        key={c}
                                        onClick={() => setColor(c)}
                                        style={{
                                            width: 16, height: 16,
                                            background: c,
                                            border: color === c ? '2px solid #000080' : '1px solid #808080',
                                            cursor: 'pointer',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 4 }}>
                            <button onClick={() => setTool('brush')} style={{ fontWeight: tool === 'brush' ? 'bold' : 'normal' }}>✏ brush</button>
                            <button onClick={() => setTool('eraser')} style={{ fontWeight: tool === 'eraser' ? 'bold' : 'normal' }}>◻ eraser</button>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
}