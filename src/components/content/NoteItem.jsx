import React from "react";
import NoteContent from "./NoteContent";
import NoteArchiveAction from "./NoteArchiveAction";
import NoteDeleteAction from "./NoteDeleteAction";

function NoteItem({ id, onDelete, onArchive, isArchive, title, body, createdAt }) {
    return (
        <div className="note-item">
            <NoteContent title={title} date={createdAt} body={body} />
            <div className="note-item__action">
                <NoteDeleteAction id={id} onDelete={onDelete} />
                <NoteArchiveAction id={id} onArchive={onArchive} isArchive={isArchive} />
            </div>
        </div>
    );
}

export default NoteItem;