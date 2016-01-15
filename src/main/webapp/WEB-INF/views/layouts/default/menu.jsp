<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<p>menu</p>
<%-- <sec:authentication property="${SPRING_SECURITY_CONTEXT} "/> --%>
${sessionScope.userLoginInfo.username} 
<sec:authorize access="isAnonymous()">
<a href="/dkh/login">Login</a>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_USER')">
<%-- <c:out value="${sessionScope}"></c:out> --%>
<c:out value="${sessionScope.SPRING_SECURITY_CONTEXT.authentication.principal.username}"></c:out>님 환영합니다.<br/>
<c:out value="${sessionScope.SPRING_SECURITY_CONTEXT.authentication.principal.email}"></c:out>님 환영합니다.<br/>
<a href="/dkh/logout">Logout</a>
</sec:authorize>
