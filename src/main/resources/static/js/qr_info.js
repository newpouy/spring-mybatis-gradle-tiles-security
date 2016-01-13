////////////////////////////////////////////////////////////////////////////////////
//
//		작성자 : 김재수                             
//		작성일 : 2011.05.30               
//		사용처 : qr정보 페이지 JS
//
////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************
//문서가 로드시 시작한다
***********************************************************************/
$(document).ready(function() {
	if(qr_code!='') jf_ready();
	function jf_ready() {
		$.ajax({
			type:"GET",
			dataType:"json",
			url      : "/qr/"+qr_code+"/"+qr_type,
			data   : null,
			success:function(m_data, textStatus, jqXHR) {
			     jf_tableSetting(m_data);
			},
            error : function(request, status, error) {
		  	      jf_tableSetting(request.responseText);
            }
		});
	}

	function jf_tableSetting(m_data) {
		var html_temp = "";
		var mem_code						= $.trim(m_data.memberId);		// 회원코드
		var corp_code						= $.trim(m_data.companyCd);	// 회사코드
		var mem_namee_yn				= $.trim(m_data.nameeJoinYn);
		var mem_namee_id				= $.trim(m_data.nameeId);
		var corp_homepage				= $.trim(m_data.homePageUrl);
		var mem_name						= $.trim(m_data.name);
		var mem_div_name				= $.trim(m_data.bonbuName);
		var mem_depa_name			= $.trim(m_data.deptName);
		var mem_posi_name			= $.trim(m_data.positionName);
		var mem_tnum					= $.trim(m_data.telNo);
		var mem_cnum					= $.trim(m_data.mtelNo);
		var mem_fnum					= $.trim(m_data.faxNo);
		var mem_email					= $.trim(m_data.email);
		var corp_addr1					= $.trim(m_data.addr1);
		var corp_addr2					= $.trim(m_data.addr2);
		var addr_code						= $.trim(m_data.addrCode);
		var addr_zip						= $.trim(m_data.zipCd);

		// 모바일 페이지 변경으로 추가됨 
		var added_item_title            = $.trim(m_data.addedItemTitle);  
		var added_item_contents         = $.trim(m_data.addedItemContents);  
			added_item_contents  =  added_item_contents.split("STRAMP").join("&");
		var video_name                  = $.trim(m_data.videoName);  
		var video_url                   = $.trim(m_data.videoUrl);  
			video_url  =  video_url.split("STRAMP").join("&");

		if(	video_name != '') {
      		var appendHtml = "<p><a href='" + video_url +"' target='blank'>" + video_name + "</a></p>";			
      		$("#info").append( appendHtml );
    	}
		var QR_CODE_IMG_PATH        = $.trim(m_data.qrCodeImgPath);
		
		document.title =  mem_name;
		$("#logo").append("<img src='/images/"+corp_code+"_logo.gif' title='"+corp_code+"'>");

        if(QR_CODE_IMG_PATH != '') {
			$("#qr_img").append("<img src='http://bc.namee.co.kr/BIZCARD/" + QR_CODE_IMG_PATH+"' title='qr' width='100' height='100'>");
		} else {
			$("#qr_img").append("<img src=/resources/images/photo.jpg"+" title='qr' width='100' height='100'>");
		}
			
		$("#u_name").append(mem_name);
		$("#u_rank").append(mem_posi_name);	
		
		if (mem_div_name != '' && mem_depa_name != '') {
			if (corp_code == 'dongailbo') var html_temp2	= mem_div_name+" "+mem_depa_name;
			else var html_temp2	= mem_div_name+"/"+mem_depa_name;
		} else {
			if (mem_div_name != '') var html_temp2	= mem_div_name;
			if (mem_depa_name != '') var html_temp2	= mem_depa_name;
		}
		$("#u_depart").append(html_temp2);	
		
		if (corp_code != 'kyobosec'){  // 교보 생명 추가 항목 하단 표시 예외처리
			// 추가항목 넣기
			if (added_item_title != '')
			{
				if(added_item_contents.toLowerCase().indexOf("http") < 0) {
					html_temp += "<tr><th nowrap='nowrap'>"+added_item_title+"</th><td>"
					
					while(added_item_contents != "" ) {
						  html_temp += added_item_contents.substring(0,28) + "<br>";
						  added_item_contents = added_item_contents.substring(28);
					}
					html_temp += "</td></tr>";
				} else {
					html_temp += "<tr><th nowrap='nowrap'>"+added_item_title+"</th><td><a href='#' onclick=\"window.open( '"+added_item_contents+"','','')\">"

					while(added_item_contents != "" ) {
						  html_temp += added_item_contents.substring(0,28) + "<br>";
						  added_item_contents = added_item_contents.substring(28);
					}
					html_temp += "</td></tr>";
				}	
			}	

			if (corp_homepage != '')
			{
				html_temp += "<tr><th nowrap='nowrap'>홈페이지</th><td><a href='#' onclick=\"window.open( 'http://"+corp_homepage+"','','')\">"+corp_homepage+"</a></td></tr>";
			}	
			
		//	html_temp += "<tr><th nowrap='nowrap'>우편번호</th><td>"+addr_zip+"</td></tr>";
			html_temp += "<tr><th nowrap='nowrap'>주소</th><td>";
			if(corp_addr1!='') {
			html_temp += "<a href='http://m.map.daum.net/actions/searchView?q="+corp_addr1+" "+corp_addr2+"#/all/map/place'>"+corp_addr1+" "+corp_addr2+"</a></td></tr>";
			}else{
			html_temp += corp_addr1+" "+corp_addr2+"</td></tr>";	
			}
			

			html_temp += "<tr><th nowrap='nowrap'>전화번호</th><td><a href='tel:" + mem_tnum + "'>"+mem_tnum+"</a></td></tr>";
			html_temp += "<tr><th nowrap='nowrap'>휴대폰번호</th><td><a href='tel:" + mem_cnum + "'>"+mem_cnum+"</a></td></tr>";
			html_temp += "<tr><th nowrap='nowrap'>팩스번호</th><td><a href='tel:" + mem_fnum + "'>"+mem_fnum+"</a></td></tr>";
					
			if (mem_namee_yn == 'y' )
			{
				html_temp += "<tr><th nowrap='nowrap'>이메일</th><td><a href='mailto:" + mem_email + "'>"+mem_email+"</a></td></tr>";
				html_temp += "<tr><th class='last'>인터넷명함</th><td class='last'><a href='http://namee.co.kr/"+mem_namee_id+"'>http://namee.co.kr/"+mem_namee_id+"</a></td></tr>";
			
			} else
			{
				html_temp += "<tr><th class='last'>이메일</th><td class='last'><a href='mailto:" + mem_email + "'>"+mem_email+"</a></td></tr>";
			}
		} else {  //if (corp_code != 'kyobolife'){ 
			if (corp_homepage != '')
			{
				html_temp += "<tr><th nowrap='nowrap'>홈페이지</th><td><a href='#' onclick=\"window.open( 'http://"+corp_homepage+"','','')\">"+corp_homepage+"</a></td></tr>";
			}	
			
		//	html_temp += "<tr><th nowrap='nowrap'>우편번호</th><td>"+addr_zip+"</td></tr>";
			html_temp += "<tr><th nowrap='nowrap'>주소</th><td>";
			if(corp_addr1!='') {
			html_temp += "<a href='http://m.map.daum.net/actions/searchView?q="+corp_addr1+" "+corp_addr2+"#/all/map/place'>"+corp_addr1+" "+corp_addr2+"</a></td></tr>";
			}else{
			html_temp += corp_addr1+" "+corp_addr2+"</td></tr>";	
			}

			html_temp += "<tr><th nowrap='nowrap'>전화번호</th><td><a href='tel:" + mem_tnum + "'>"+mem_tnum+"</a></td></tr>";
			html_temp += "<tr><th nowrap='nowrap'>휴대폰번호</th><td><a href='tel:" + mem_cnum + "'>"+mem_cnum+"</a></td></tr>";
			html_temp += "<tr><th nowrap='nowrap'>팩스번호</th><td><a href='tel:" + mem_fnum + "'>"+mem_fnum+"</a></td></tr>";
					
			if (mem_namee_yn == 'y' ){
				html_temp += "<tr><th nowrap='nowrap'>이메일</th><td><a href='mailto:" + mem_email + "'>"+mem_email+"</a></td></tr>";
				html_temp += "<tr><th nowrap='nowrap'>인터넷명함</th><td nowrap='nowrap'><a href='http://namee.co.kr/"+mem_namee_id+"'>http://namee.co.kr/"+mem_namee_id+"</a></td></tr>";
			
			} else {
				html_temp += "<tr><th nowrap='nowrap'>이메일</th><td nowrap='nowrap'><a href='mailto:" + mem_email + "'>"+mem_email+"</a></td></tr>";
			}
			if (added_item_title != '') {
				if(added_item_contents.toLowerCase().indexOf("http") < 0) {
					html_temp += "<tr><th class='last'>"+added_item_title+"</th><td  class='last>"
					
					while(added_item_contents != "" ) {
						  html_temp += added_item_contents.substring(0,28) + "<br>";
						  added_item_contents = added_item_contents.substring(28);
					}
					html_temp += "</td></tr>";
				} else {
					html_temp += "<tr><th class='last'>"+added_item_title+"</th><td class='last'><a href='#' onclick=\"window.open( '"+added_item_contents+"','','')\">"

					while(added_item_contents != "" ) {
						  html_temp += added_item_contents.substring(0,28) + "<br>";
						  added_item_contents = added_item_contents.substring(28);
					}
					html_temp += "</td></tr>";
				}	
			}	
		} 
		$("#info_detail").append(html_temp);
	}
});