<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<form method="post" action="/dkh/boardModify/${board.boardId}">
	<input id="writer" name="writer" value="${board.writer}">
	<input type="text" id="title" name="title" value="${board.title}">
	<textarea id="content" name="content">${board.content}</textarea>
	<input type="submit" value="수정">
</form>