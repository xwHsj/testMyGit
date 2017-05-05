/**
 * 
 * @authors   Horan 
 * @date      2017-02-20
 * @location  ifdoo
 * @describe  modal多层遮罩
 */

$(document).on('show.bs.modal', '.modal', function(event) {
	$(this).appendTo($('body'));
}).on('shown.bs.modal', '.modal.in', function(event) {
	setModalsAndBackdropsOrder();
	closeModalhiddenEven();
}).on('hidden.bs.modal', '.modal', function(event) {
	setModalsAndBackdropsOrder();
	closeModalhiddenEven();
});

function setModalsAndBackdropsOrder() {
	var modalZIndex = 1040;
	$('.modal.in').each(function(index) {
		var $modal = $(this);
		modalZIndex++;
		$modal.css('zIndex', modalZIndex);
		$modal.next('.modal-backdrop.in').addClass('hidden').css('zIndex', modalZIndex - 1);
	});
	$('.modal.in:visible:last').focus().next('.modal-backdrop.in').removeClass('hidden');
};

function closeModalhiddenEven() {
	var modalshowLengths = $('.modal.in:visible').length;
	if(modalshowLengths >= 1) {
		$("body").addClass("modal-open");
	} else if(modalshowLengths == 0) {
		$("body").removeClass("modal-open");
	}
};

/*
 * modal  居中
 * 
 */

function centerModals(){
	$('.HoranMyModals').each(function(i){   // 此处的class类名 ‘ HoranMyModals ’ 需要自己定义    添加到html modal上即可 实现modal居中
		var $clone = $(this).clone().css('display', 'block').appendTo('body');    
		var top = Math.round(($clone.height() - $clone.find(' .modal-content').height()) / 4);
		top = top > 0 ? top : 0;
		$clone.remove();
		$(this).find(".modal-content").css("margin-top", top);
	});
}
$('.HoranMyModals').on('show.bs.modal', centerModals);
$(window).on('resize', centerModals);
