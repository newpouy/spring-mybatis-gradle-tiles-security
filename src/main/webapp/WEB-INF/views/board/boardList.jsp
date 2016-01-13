<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<input type="button" id="testBtn" onclick="alert('hihihihihiihii')">
<h2>게시판 목록1111</h2>
<table style="border:1px solid #ccc">
<%--     <colgroup>
        <col width="10%"/>
        <col width=""/>
        <col width="15%"/>
        <col width="20%"/>
    </colgroup> --%>
    <thead>
        <tr>
            <th scope="col">글번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
			 <th scope="col">작성일</th>
        </tr>
    </thead>
    <tbody>
        <c:choose><c:when test="${fn:length(boardList) > 0}"><c:forEach items="${boardList}" var="row">
                    <tr>
                        <td>${row.boardId }</td>
                        <td>${row.title }</td>
                        <td><a href="<c:url value="/board/${row.boardId}"/>">${row.writer }</a></td>
							<td>${row.regDate }</td>
                    </tr>
                </c:forEach></c:when><c:otherwise>
                <tr>
                    <td colspan="4">조회된 결과가 없습니다.</td>
                </tr></c:otherwise></c:choose> 
         
    </tbody>
</table>
<a href="<c:url value="/boardWriteView"/>">글쓰기</a>
