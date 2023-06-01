import { IBoardEntity } from "@reza/core";

type TBoardItemProps = {
    board: IBoardEntity
};

const BoardItem = ({ board }: TBoardItemProps) => {
    const { author, content, createAt, id } = board
    const createDate = new Date(createAt).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    })
    return (
        <div className="board-list__item-content">
            <span>{id}</span>
            <span>{author}</span>
            <span>{content}</span>
            <span>{createDate}</span>
        </div>
    )
}

export default BoardItem;