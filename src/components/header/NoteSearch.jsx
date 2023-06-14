import React from "react";

function NoteSearch({ search, onSearchChange }) {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari catatan..." value={search} onChange={onSearchChange} />
        </div>
    );
}

export default NoteSearch;