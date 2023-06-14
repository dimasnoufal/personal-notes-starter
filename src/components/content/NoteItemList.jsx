import React from "react";
import NoteItem from "./NoteItem";

function NoteItemList({ datas, onDelete, onActive, onArchive, inputSearch }) {
    return (
        <div className="notes-list">
            {datas.map((data) => (
                <NoteItem {...data} key={data.id} id={data.id} onDelete={onDelete} onActive={onActive} onArchive={onArchive} inputSearch={inputSearch} />
            ))}
        </div>
    );
}

export default NoteItemList;