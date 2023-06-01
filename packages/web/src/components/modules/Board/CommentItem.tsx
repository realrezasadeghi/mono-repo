import { ICommentEntity } from "@reza/core";

type TCommentItemProps = {
    comment: ICommentEntity
}

const CommentItem = ({ comment }: TCommentItemProps) => {
    const { author, content, createAt } = comment
    const createDate = new Date(createAt).toISOString()
    return (
        <li className="board-list__comments-item">
            <span>{author}</span>
            <span>{content}</span>
            <span>{createDate}</span>
        </li>
    )
}

export default CommentItem;