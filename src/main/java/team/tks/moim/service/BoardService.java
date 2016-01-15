package team.tks.moim.service;

import java.util.List;
import java.util.Map;

import team.tks.moim.domain.Board;


public interface BoardService {
	public List<Map<String, Object>> getBoardList();
	public Board getBoard(int BoardId);
	public int writeBoard(Board Board);
	public int modifyBoard(Board Board);
	public int deleteBoard(int BoardId);
	
	public String getAttachedFilePath(int BoardId);
	
	public List<Map<String, Object>> search(String searchKeyWord, String searchText);
}
