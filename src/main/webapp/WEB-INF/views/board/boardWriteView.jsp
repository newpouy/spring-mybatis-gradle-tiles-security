<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<form method="post" action="/dkh/boardWrite ">
	<input id="writer" name="writer">
	<input type="text" id="title" name="title">
	<textarea id="content" name="content"></textarea>
	<input type="submit">
</form>