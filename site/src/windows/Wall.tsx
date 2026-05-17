import Draggable from "react-draggable";
import { useEffect, useRef, useState } from 'react';
import { supabase } from '../supabase';

export default function Wall() {
    const nodeRef = useRef(null);

    const [input, setInput] = useState("");
    const [comment, setComment] = useState<{message: string, name: string, created_at: string}[]>([]);
    const [name, setName] = useState("");

    async function penis() {
        if(input == "") {
            return;
        }

        await supabase.from("comments").insert({ message: input, name: name || "anon"});

        setComment([...comment, { message: input, name: name || "anon", created_at: new Date().toISOString()}]);
        setInput("");
    }

    useEffect(() => {
        async function fetchComments() {
            const { data } = await supabase.from("comments").select("*").order('created_at', { ascending: false });
            if(data) setComment(data.map(c => ({ message: c.message, name: c.name, created_at: c.created_at})));
        }
        fetchComments();
    }, []);

    return(
        <Draggable grid={[5,5]} handle=".title-bar" nodeRef={nodeRef}>
            <div ref={nodeRef} className="window absolute top-20 right-4" style ={{ width: 400 }}>
                <div className="title-bar">
                    <div className="title-bar-text">comment wall</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                    <p className="text-2xl font-bold">enter a comment.</p>
                    <p className="text-md">username defaults to anon</p>
                        <input type="text" className="w-2/5 mt-2 mb-2" placeholder="username" onChange={(e) => setName(e.target.value)}/>
                        <input type="text" className="w-full" onChange={(e) => setInput(e.target.value)} placeholder="enter a comment."/>
                    <button className="mt-2 mb-2 font-bold"
                    onClick={penis}>
                        submit
                    </button>
                    <hr />
                    <div style={{ height: 200, overflowY: 'auto' }}>
                        {comment.map((comment, index) =>
                            <div key={index}>
                            <p>{comment.message}</p>
                            <p className="font-light"> {comment.name} @ {new Date(comment.created_at).toLocaleString()}</p>
                            <hr />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Draggable>
    )
}