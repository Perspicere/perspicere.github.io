function generate_report_dialog(e){"undefined"==typeof dui?$.getScript("/js/ui/dialog.js",function(){_generate_report_dialog(e)}):_generate_report_dialog(e)}function _generate_report_dialog(e){var t='<span class="up">举报已提交</span>',o="http://help.douban.com/help/ask",r="/j/misc/report_form",n="/misc/audit_report",i='<span>为了便于工作人员进行受理，请您通过豆瓣帮助中心<br ><a target="_blank" href="'+o+'">'+o+"</a>详细描述举报内容</span>",d="<h3>提交详细信息</h3>",l=e.report_url?e.report_url:"",a=e.reason?e.reason:0,p=dui.Dialog({title:e.title?e.title:"选择举报原因",url:e.url?e.url:r,width:e.width?e.width:442,cls:e.cls?e.cls:"report-dialog"});p.report_url=l,p.is_report_dlg_singleton||(p.body.delegate(".btn-report","click",function(){a=$("#report_value input[type=radio]:checked").val(),"other"==a?(p.node.find(".hd").html(d),p.node.find(".bd").html(i),p.update(),p.body.delegate(".bd a","click",function(){p.close()})):$.post_withck(n,{url:p.report_url,reason:a},function(){p.node.find(".hd").hide(),p.node.find(".bd").html(t),p.update(),setTimeout(function(){p.close()},1e3)})}),p.is_report_dlg_singleton=!0),p.open(),p.node.find(".hd").show(),p.update()}
