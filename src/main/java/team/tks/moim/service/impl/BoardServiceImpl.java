package team.tks.moim.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import team.tks.moim.service.BoardService;
import team.tks.moim.domain.Board;
import team.tks.moim.repository.BoardMapper;

@Service
@Slf4j
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	BoardMapper boardMapper;
	
	public List<Map<String, Object>> getBoardList() {
		//log.debug("getBoardList");
		// TODO Auto-generated method stub
		return boardMapper.selectBoardList();
	}

	public Board getBoard(int BoardId) {
		// TODO Auto-generated method stub
		return boardMapper.selectBoard(BoardId);
	}

	public int writeBoard(Board board) {
		//log.debug("writeBoard: ");
		
		// TODO Auto-generated method stub
		return boardMapper.insertBoard(board);
	}

	public int modifyBoard(Board board) {
		// TODO Auto-generated method stub
		return boardMapper.updateBoard(board);
	}

	public int deleteBoard(int BoardId) {
		// TODO Auto-generated method stub
		return boardMapper.deleteBoard(BoardId);
	}

	public String getAttachedFilePath(int BoardId) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Map<String, Object>> search(String searchKeyWord, String searchText) {
		// TODO Auto-generated method stub
		Map<String, Object> map = new HashMap<>();
		map.put("searchKeyWord", searchKeyWord);
		map.put("searchText", searchText);
		return boardMapper.search(map);
	}
	
}
