import React from "react";
import NoteNav from "./header/NoteNav";
import NoteForm from "./form/NoteForm.jsx";
import NoteItemList from "./content/NoteItemList";
import { getInitialData } from "../utils/index"


class NoteMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: getInitialData(),
            search: "",
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const dataNote = this.state.datas.filter((data) => data.id !== id);
        this.setState({ datas: dataNote });

    }

    onAddHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                datas: [
                    ...prevState.datas,
                    {
                        id: +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false,
                    },
                ],
            };
        });
    }
    onArchiveHandler(id) {
        const datas = this.state.datas.map((data) => (data.id === id ? { ...data, archived: !data.archived } : data));
        this.setState({ datas });
    }
    onNoteSearchHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            };
        });
    }

    render() {
        const search = this.state.datas.filter((data) => data.title.toLowerCase().includes(this.state.search.toLocaleLowerCase()));
        const unactived = search.filter((data) => {
            return data.archived === false;
        });
        const actived = search.filter((data) => {
            return data.archived === true;
        });
        return (
            <div>
                <NoteNav search={this.state.search} onSearchChange={this.onNoteSearchHandler}/>
                <div className="note-app__body">
                    <NoteForm addNotes={this.onAddHandler} />
                    <h2>Catatan</h2>
                    {unactived.length > 0 ? <NoteItemList inputSearch={this.state.search} datas={unactived} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <h1 className="notes-list__empty-message">Tidak Ada Catatan</h1>}
                    <h2>Arsip</h2>
                    {actived.length > 0 ? <NoteItemList inputSearch={this.state.search} datas={actived} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <h1 className="notes-list__empty-message">Tidak Ada Catatan</h1>}
                </div>
            </div>
        );
    }
}

export default NoteMain;