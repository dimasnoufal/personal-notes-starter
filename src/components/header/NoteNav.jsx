import React from "react";
import NoteSearch from "./NoteSearch";

function NoteNav({ search, onSearchChange }) {
    return (
        <div className="note-app__header">
            <h1> My Note App</h1>
            <NoteSearch search={search} onSearchChange={onSearchChange} />
        </div>
    )
}

export default NoteNav;