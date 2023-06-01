import di from "../di";
import { useCallback } from "react";
import { useSetBoardList } from "../recoil/board";

const useAddBoard = () => {
  const { board } = di;
  const setBoard = useSetBoardList();
  const addBoard = useCallback(
    async (author: string, content: string) => {
      const resStatus = await board.insertBoard(author, content);
      if (resStatus) {
        setBoard(await board.getBoards());
      }
    },
    [board, setBoard]
  );

  return {
    addBoard,
  };
};

export default useAddBoard;
