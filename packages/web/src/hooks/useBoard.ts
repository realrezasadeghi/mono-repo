import di from "../di";
import { useEffect, useCallback } from "react";
import { useBoardListState } from "../recoil/board";

const useBoards = () => {
  const [boards, setBoards] = useBoardListState();

  const getBoard = useCallback(async () => {
    const result = await di.board.getBoards();
    setBoards(result);
  }, [setBoards]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return boards;
};

export default useBoards;
