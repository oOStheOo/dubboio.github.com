AJS.toInit(function(B){var A=AJS.Editor.ImageDialog.findPanelComponentById("attachments");A&&B(A).bind("afterThumnail",function(E,D){if(!+AJS.params.contentId&&!AJS.params.remoteUser){return }if(D.find(".image-dialog-drop-zone-container").length>0){return }var C=B("<li></li>").attr("class","attached-image");var F=B("<div></div>").addClass("image-dialog-drop-zone-container").addClass("image-container");B("<div></div>").attr("class","drop-zone-image").attr("title",AJS.DragAndDrop.i18n["http://10.20.160.198/wiki/s/en/2166/34/1.0.16/_/download/batch/com.atlassian.confluence.plugins.drag-and-drop:drop-zone-for-image-dialog/drop.zone.text"]).appendTo(F);B('<div class="drop-zone-text">'+AJS.DragAndDrop.i18n["http://10.20.160.198/wiki/s/en/2166/34/1.0.16/_/download/batch/com.atlassian.confluence.plugins.drag-and-drop:drop-zone-for-image-dialog/drop.here"]+"</div>").appendTo(F);F.appendTo(C);D.prepend(C);if(!B.browser.msie){AJS.DragAndDropUtils.bindDragEnter(F[0],function(){F.addClass("drop-zone-on-hover")});AJS.DragAndDropUtils.bindDragOver(F[0],function(){F.addClass("drop-zone-on-hover")});AJS.DragAndDropUtils.bindDragLeave(F[0],function(){F.removeClass("drop-zone-on-hover")})}})});
