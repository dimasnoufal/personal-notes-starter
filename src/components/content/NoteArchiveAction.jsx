import React from "react";

function NoteArchiveAction({ id, onArchive, isArchive }) {
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
            {isArchive ? "Succeed to move" : "Archive"}
        </button>
    );
}

export default NoteArchiveAction;