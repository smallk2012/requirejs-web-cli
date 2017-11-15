
####模拟
````
for(var m = 0; m < count; m++){
	console.log('我是目录')
	for(var n = 0; n < subcount; n++){
		console.log('我是子目录')
		for(var n = 0; n < doccount; n++){
			console.log('我是内容')
		}
	}
}
````
####默认模板
````
<!DOCTYPE html>
<html>

	<head>
		<!--#include virtual="<TRS_WEBSITE field='ROOTDOMAIN' />common/head/index.shtml"-->
	</head>

	<body>
		<!--#include virtual="<TRS_WEBSITE field='ROOTDOMAIN' />common/tips/index.shtml"-->
		<!--header-->
		<!--#include virtual="<TRS_WEBSITE field='ROOTDOMAIN' />common/header/index.shtml"-->
		<!--end-->
		<!--banner-->
		<TRS_DOCUMENTS ID='OWNER' NUM='1' STARTPOS='0'>
			<div class="common-banner">
				<div class="banner-cont">
					<div class="banner-bg">
						<div class="banner-lg lazy-bg-pc" data-background="<TRS_APPENDIX INDEX='0' URLISABS='TRUE' FIELD='_RECURL' MODE='PIC' UPLOAD='TRUE'></TRS_APPENDIX>"></div>
						<div class="banner-sm lazy-bg-phone" data-background="<TRS_APPENDIX INDEX='1' URLISABS='TRUE' FIELD='_RECURL' MODE='PIC' UPLOAD='TRUE'></TRS_APPENDIX>"></div>
					</div>
					<div class="title-box">
						<div class="table">
							<div class="table-cell">
								<h3 class="title font-ios"><TRS_CHANNEL ID='OWNER' FIELD='CHNLDESC' AUTOLINK='FALSE'></TRS_CHANNEL></h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</TRS_DOCUMENTS>
		<!--end-->
		
		<!--footer-->
		<!--#include virtual="<TRS_WEBSITE field='ROOTDOMAIN' />common/footer/index.shtml"-->
		<!--end-->
		<!--js-->
		<TRS_TEMPLATE TEMPNAME='jsconfig'></TRS_TEMPLATE>
       	<!--#include virtual="<TRS_WEBSITE field='ROOTDOMAIN' />common/requirejs/index.shtml"-->
		<!--end-->
	</body>

</html>

````
####概览空模板
````
<TRS_CHANNEL ID='OWNER' FIELD='CHANNELID' />
````
####细览空模板
````
<html></html>
````
####跳转到第一个栏目
````
<!doctype html>
<html>
	<head>
		<meta http-equiv="refresh" content="0;url=<TRS_CHANNELS ID='OWNER' NUM='1' ><TRS_CHANNEL FIELD='_RECURL' UrlIsAbs='TRUE' AUTOLINK='false'/></TRS_CHANNELS>">
	</head>
	<body>
	</body>
</html>
````
####引入页面
````
<!--#include virtual="<TRS_WEBSITE FIELD='ROOTDOMAIN' />common/head/index.shtml"-->
````
####引入模板
````
<TRS_TEMPLATE TEMPNAME='jsconfig'></TRS_TEMPLATE>
````

####WCM嵌套常用语法
````
<TRS_WEBSITE FIELD='ROOTDOMAIN'></TRS_WEBSITE>站点路径
<TRS_WEBSITE FIELD='SITEID'></TRS_WEBSITE>站点ID
<TRS_CHANNELLOGO ID='OWNER' SHOWPIC='FALSE' NAMEONLY='FALSE' URLISABS='TRUE' INDEX='1' />栏目logo

<TRS_VARIABLE NAME="无子菜单栏目" TYPE="S" DEFAULT="首页~陈承"/>//自定义变量
<TRS_ECHO value="${无子菜单栏目}"/>//输出变量

//TRS_CHANNELS指栏目
//ID指栏目的唯一标识
//比如下面这个 就是输出站点下的所有栏目的唯一标识
<TRS_CHANNELS ID='SITE' STARTPOS='0'>//输出站点下每个栏目
	<TRS_CHANNEL ID='OWNER' AUTOLINK='FALSE'></TRS_CHANNEL>唯一标识
</TRS_CHANNELS>

<TRS_CHANNELS ID='OWNER' NUM='1' STARTPOS='0'>
      <TRS_CHANNEL ID='PARENT' FIELD='CHNLNAME' AUTOLINK='FALSE'></TRS_CHANNEL>//上一级[父级]唯一标识
	  <TRS_CHANNEL ID='OWNER' FIELD='CHNLDESC' AUTOLINK='FALSE'></TRS_CHANNEL>显示名称
	  <TRS_CHANNEL ID='OWNER' FIELD='CHNLNAME' AUTOLINK='FALSE'></TRS_CHANNEL>唯一标识
	  <TRS_CHANNEL ID='OWNER' FIELD='CHANNELID'></TRS_CHANNEL>栏目ID
	  <TRS_CHANNEL ID='OWNER' FIELD='_RECURL' URLISABS='TRUE'></TRS_CHANNEL>栏目路径
</TRS_CHANNELS>

//该栏目的 显示名称
<TRS_CHANNEL ID='OWNER' FIELD='CHNLDESC' AUTOLINK='FALSE'></TRS_CHANNEL>显示名称

//for新闻-搜索 列表型数据获取默认排序方法
<TRS_DOCUMENTS PAGESIZE="10" AUTOMORE="FALSE" ORDER="DOCRELTIME DESC">
	<TRS_DOCUMENT FIELD='DOCTITLE' AUTOLINK='FALSE'></TRS_DOCUMENT>文档标题
</TRS_DOCUMENTS>

//for输出该栏目的资源
<TRS_DOCUMENTS ID='OWNER' STARTPOS='0'>
	  <TRS_ISFIRSTRECORD>第一条就会输出</TRS_ISFIRSTRECORD>
	  <TRS_ISLASTRECORD>最后一条就会输出</TRS_ISLASTRECORD>
	  <TRS_ISNOTLASTRECORD>不是最后一条就输出</TRS_ISNOTLASTRECORD>
	  <TRS_CONDITION REFERENCE="首页~园区概况" CONDITION="@CHNLDESC" OPERATOR="contain" NOT="TRUE">
	  		不是包含首页或园区概况的字段就会输出
	  </TRS_CONDITION>
	  <TRS_DOCUMENT FIELD='DOCID' AUTOLINK='FALSE'></TRS_DOCUMENT>文档ID
      <TRS_DOCUMENT FIELD='DOCTITLE' AUTOLINK='FALSE'></TRS_DOCUMENT>文档标题
      <TRS_DOCUMENT FIELD='DOCPEOPLE' AUTOLINK='FALSE'></TRS_DOCUMENT>首页标题
      <TRS_DOCUMENT FIELD='SUBDOCTITLE'></TRS_DOCUMENT>副标题
      <TRS_DOCUMENT FIELD='DOCCONTENT'></TRS_DOCUMENT>文本内容
      <TRS_DOCUMENT FIELD='DOCHTMLCON'></TRS_DOCUMENT>HTML文本内容
      <TRS_DOCUMENT FIELD='DOCABSTRACT'></TRS_DOCUMENT>摘要
      <TRS_DOCUMENT FIELD='DOCAUTHOR'></TRS_DOCUMENT>作者
      <TRS_DOCUMENT FIELD='DOCLINK'></TRS_DOCUMENT>链接地址
      <TRS_DOCUMENT FIELD='_RECURL' URLISABS='TRUE'></TRS_DOCUMENT>//文档路径
      <TRS_DOCUMENT FIELD='DOCKEYWORDS'></TRS_DOCUMENT>关键字[带逗号保存后会自动转为分号，少用该字段]
      <TRS_DOCUMENT FIELD='DOCRELTIME' DATEFORMAT='yyyy-MM-dd'></TRS_DOCUMENT>撰写时间
      <TRS_DOCUMENT FIELD='DOCSOURCENAME' AUTOLINK='FALSE'></TRS_DOCUMENT>来源
      
      //附件属性 (单个)输出方法
      <TRS_APPENDIX INDEX='0' URLISABS='TRUE' FIELD='_RECURL' MODE='PIC' UPLOAD='TRUE'></TRS_APPENDIX>第一个图片路径
      <TRS_APPENDIX INDEX='0' URLISABS='TRUE' FIELD='_RECURL' MODE='FILE' UPLOAD='TRUE'></TRS_APPENDIX>第一个文件路径
      <TRS_APPENDIX INDEX='0' URLISABS='TRUE' FIELD='_RECURL' MODE='LINK' UPLOAD='TRUE'></TRS_APPENDIX>第一个链接路径
		
	  //附件属性 循环(多个)输出方法
	  <TRS_XAPPENDIXS ID='OWNER' MODE='PIC'>//FOR循环附件文件方法MODE='FILE'文件,MODE='LINK'
      	  <TRS_XAPPENDIX FIELD='#INFOTITLE'></TRS_XAPPENDIX>图片描述
      	  <TRS_XAPPENDIX URLISABS='TRUE' FIELD='_RECURL' UPLOAD='TRUE'></TRS_XAPPENDIX>图片路径
	  </TRS_XAPPENDIXS>
</TRS_DOCUMENTS>
````

####AJAX
````
//搜索 && 新闻列表
$.ajax({
	url: hosturl,
	dataType: "json",
	type: "GET",
	data: {
		testpagetotal: testpagetotal, //个人接口模拟字段，非接口字段
		str:teststr,//个人接口模拟字段，非接口字段
		channelid: 242933,
		metadata: "DOCTITLE|CRTIME|DOCPUBTIME|DOCCHANNEL|DOCPUBURL|SITEID|DOCRELTIME|DOCIDX|DOCABSTRACT|APPFILE",
		orderby: "-DOCRELTIME",
		perpage: 10,
		page: pagenum,
		searchword: '(DOCCHANNEL=' + docchannel + ')'
		//searchword: '((' + keyword + ') and (DOCCHANNEL=(' + docchannel + ')))'
	},
	success: function(data) {
		if(data) {
			if(!data.rows) {
				data.rows = [];
			}
			fun && fun(data);
		} else {
			fun && fun(obj);
		}
	},
	error: function(e) {
		fun && fun(obj);
	}
})

//列表浏览数标签
//<i class="llcsArts" siteid="66" docid="123"></i>
var hosturl = 'https://apitest.shlingang.com/lingang-consumer/wcm/getClickList.do';
hosturl = isdebug == true ? 'http://yingzaiqidian.cn/demo/ajax/viewslistcount.php' : hosturl;
if($(el).length && hosturl) {
	var docids = [];
	var siteid = '';
	for(var i = 0; i < $(el).length; i++) {
		siteid = $(el).eq(i).attr('siteid');
		if($(el).eq(i).attr('nonum') != undefined) {
			$(el).eq(i).removeAttr('nonum');
			docids.push(parseInt($(el).eq(i).attr('docid')));
		}
	}
	if(docids.length) {
		$.ajax({
			url: hosturl,
			dataType: "jsonp",
			type: "GET",
			data: {
				siteId: siteid,
				docIds: docids.toString(),
				rd: Math.random()
			},
			jsonp: 'callback',
			jsonpCallback: 'getViewsCount',
			success: function(res) {
				if(res.data) {
					for(var i = 0; i < res.data.length; i++) {
						$(el + "[docid='" + res.data[i].docId + "']").html(res.data[i].clickCount);
					}
				}
			},
			error: function(r, t) {
				gl.log(t);
			}
		})
	}
}

//单个浏览数标签
//<i class="llcsArt" siteid="66" docid="123"></i>
var hosturl = 'https://apitest.shlingang.com/lingang-consumer/wcm/clickCount.do';
hosturl = isdebug == true ? 'http://yingzaiqidian.cn/demo/ajax/viewscount.php' : hosturl;
if($(el).length && hosturl) {
	var docid = $(el).attr('docid');
	var siteid = $(el).attr('siteid');
	$.ajax({
		url: hosturl,
		dataType: "jsonp",
		type: "GET",
		data: {
			docId: docid,
			siteId: siteid,
			rd: Math.random()
		},
		jsonp: 'callback',
		jsonpCallback: 'getViewsCount',
		success: function(data) {
			var viewsCountNum = data.data.clickCount;
			$(el).html(viewsCountNum);
		},
		error: function(r, t) {
			gl.log(t);
		}
	})
}
````