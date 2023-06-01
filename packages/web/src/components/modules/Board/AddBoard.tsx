import { useState } from "react";
import Button from "../../common/Button";
import TextField from "../../common/TextField";

import "./styles/add-board.scss"

type TAddBoardProps = {
    onClickAdd: (author: string, content: string) => void
}

const AddBoard = ({ onClickAdd }: TAddBoardProps) => {
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    return (
        <div className="add-board">
            <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <TextField label="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <Button label="Add" onClick={() => onClickAdd(author, content)} />
        </div>
    )
}

export default AddBoard;