<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
${boardOne.boardId}<br/>
${boardOne.title}<br/>
${boardOne.writer}<br/>
${boardOne.content}<br/>
<input type="button" value="수정" onclick='location.href="<c:url value="/boardModifyView/${boardOne.boardId}"/>"'><br/>
<a href="<c:url value="/boardList"/>">목록보기</a>