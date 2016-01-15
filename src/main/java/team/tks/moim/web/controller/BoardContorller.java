package team.tks.moim.web.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import team.tks.moim.domain.Board;
import team.tks.moim.service.BoardService;

@Controller
public class BoardContorller {
		
		private Logger logger = LoggerFactory.getLogger(BoardContorller.class);
		@Autowired
		BoardService boardService;
		
		@RequestMapping(value="/", method=RequestMethod.GET)
		public String main(Model model) {
			logger.debug("boardList: "+boardService.getBoardList().toString());
			model.addAttribute("boardList", boardService.getBoardList());
			return "boardList";
		}
		@RequestMapping(value="/boardList", method=RequestMethod.GET)
		public String getBoardList(Model model) {
			logger.debug("boardList: "+boardService.getBoardList().toString());
			model.addAttribute("boardList", boardService.getBoardList());
			return "boardList";
		}
		
		@RequestMapping(value="/board/{boardId}", method=RequestMethod.GET)
		public String getBoard(Model model, @PathVariable int boardId) {
			logger.debug("getBpard: "+boardService.getBoard(boardId));
			model.addAttribute("boardOne", boardService.getBoard(boardId));
			return "boardOne";
		}
		
		@RequestMapping(value="/boardWriteView", method=RequestMethod.GET)
		public String writeBoardView(Model model) {
			//logger.debug("writeBoard: "+boardService.writeBoard(Board));
			//model.addAttribute("resultBoard", boardService.writeBoard(Board));	
			return "boardWriteView";
		}
		
		@RequestMapping(value="/boardWrite", method=RequestMethod.POST)
		public String writeBoard(Model model, Board Board) {
			logger.debug("writeBoard");
			if(boardService.writeBoard(Board)>0){ //insert성공여부
				model.addAttribute("boardOne", Board);	
			}else{
				logger.debug("insert failure");
			}
			return "boardOne";
		}
		@RequestMapping(value="/boardModifyView/{boardId}", method=RequestMethod.GET)
		public String boardModifyView(Model model, @PathVariable int boardId) {
			logger.debug("controller.boardModifyView: "+boardId);
			model.addAttribute("board", boardService.getBoard(boardId));
			return "boardModifyView";
		}
		@RequestMapping(value="/boardModify/{boardId}", method=RequestMethod.POST)
		public String boardModify(Model model, Board board, @PathVariable int boardId) {
			logger.debug("controller.boardModify: "+board.getContent());
			board.setBoardId(boardId);
			if(boardService.modifyBoard(board)>0){
				model.addAttribute("boardOne", board);
			} else {
				logger.debug("update failure");
			}
			return "boardOne";
		}
}
