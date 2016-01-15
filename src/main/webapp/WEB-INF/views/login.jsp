<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<form method="post" action='<c:url value="/j_spring_security_check"/>'>
	ID: <input type="text" id="username" name="username"/><br/>
	PW: <input type="password" id="password" name="password"/>
	<!-- <input type="checkbox" id="remember" name="_spring_security_remember_me"/> -->
	<input type="submit" value="로그인">
</form>