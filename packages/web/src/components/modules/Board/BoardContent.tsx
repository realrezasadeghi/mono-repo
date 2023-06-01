import AddBoard from "./AddBoard";
import BoardList from "./BoardList";
import useBoards from "../../../hooks/useBoard";
import useAddBoard from "../../../hooks/useAddBoard";

import './styles/board-content.scss'

const BoardContent = () => {
    const boards = useBoards()
    const { addBoard } = useAddBoard()
    return (
        <div className="board-content">
            <section className="board-content__area">
                <h2 className="board-content__title">Board</h2>
                <BoardList boards={boards} />
            </section>
            <section className="board-content__area">
                <h2 className="board-content__title">Add Board</h2>
                <AddBoard onClickAdd={addBoard} />
            </section>
        </div>
    )
};

export default BoardContent;