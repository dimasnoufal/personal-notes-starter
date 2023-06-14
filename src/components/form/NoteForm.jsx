import React from "react";


class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            titleLimit: 50,
            bodyLimit: 200,
        };
        this.onTitleInputHandler = this.onTitleInputHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onNoteInputHandler = this.onNoteInputHandler.bind(this);
    }

    onTitleInputHandler(e) {
        const maxChar = 50;
        this.setState(() => {
            return {
                title: e.target.value.slice(0, maxChar),
            };
        });
    }

    onNoteInputHandler(e) {
        const maxChar = 200;
        this.setState(() => {
            return {
                body: e.target.value.slice(0, maxChar),
            };
        });
    }



    onSubmitHandler(e) {
        e.preventDefault();
        this.props.addNotes(this.state);
        this.setState({
            title: "",
            body: "",
        });
    }
    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <p className="note-input__title__char-limit">
                        Sisa karakter <span>{this.state.titleLimit - this.state.title.length}</span>
                    </p>

                    <input type="text" className="note-input__title" placeholder="Judul" value={this.state.title} onChange={this.onTitleInputHandler} required />

                    <p className="note-input__title__char-limit">
                        Sisa Karakter <span>{this.state.bodyLimit - this.state.body.length}</span>
                    </p>
                    <textarea name="body" className="note-input__body" placeholder="Tulis Catatan" value={this.state.body} onChange={this.onNoteInputHandler} required />
                    <button type="submit">Tambahkan Catatan</button>
                </form>
            </div>
        );
    }
}

export default NoteForm;