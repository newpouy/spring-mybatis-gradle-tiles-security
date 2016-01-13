package team.tks.moim.repository;

import java.util.List;
import java.util.Map;

import team.tks.moim.domain.Board;

public interface BoardMapper {
	
	public List<Map<String, Object>> selectBoardList();
	public Board selectBoard(int BoardId);
	public int insertBoard(Board Board);
	public int updateBoard(Board Board);
	public int deleteBoard(int BoardId);	
	
	public String selectAttachedFilePath(int BoardId);
	
	public List<Map<String, Object>> search(Map<String, Object> map);

}
