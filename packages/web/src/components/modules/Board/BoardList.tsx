import { IBoardEntity } from "@reza/core";
import BoardItem from "./BoardItem";

import "./styles/board-list.scss"
import CommentItem from "./CommentItem";

type TBoardListProps = {
    boards: IBoardEntity[]
}

const BoardList = ({ boards }: TBoardListProps) => {

    return (
        <div className="board-list">
            <ul className="board-list__wrapper">
                {boards.map((board) => (
                    <li className="board-list__item" key={board.id}>
                        <BoardItem board={board} />
                        <ul className="board-list__comments">
                            {board.comments.map((comment) => (<CommentItem comment={comment} />))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BoardList;