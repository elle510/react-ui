;(function($){
/**
 * ps-locale_en.js
 * 
 * version <tt>$ Version: 1.0 $</tt> date:2014/05/25
 * author <a href="mailto:hrahn@nkia.co.kr">Ahn Hyung-Ro</a>
 * 
 * example:
 * $ps_locale.validators.passwordErrorMsg
**/
$ps_locale = {locale: 'ko'};
$.extend($ps_locale,{
	ok: 'OK',
	confirm: '확인',
	cancel: '취소',
	finish: '마침',
	next: '다음',
	prev: '이전',
	loading: '로딩중...',
	apply: '적용',
	direct_select: '직접 선택',
	select: '선택하세요',
	sun: '일',
	mon: '월',
	tue: '화',
	wed: '수',
	thu: '목',
	fri: '금',
	sat: '토',
	jan: '1월',
    feb: '2월',
    mar: '3월',
    apr: '4월',
    may: '5월',
    jun: '6월',
    jul: '7월',
    aug: '8월',
    sep: '9월',
    oct: '10월',
    nov: '11월',
    dec: '12월',
    january: '1월',
    february: '2월',
    march: '3월',
    april: '4월',
    may: '5월',
    june: '6월',
    july: '7월',
    august: '8월',
    september: '9월',
    october: '10월',
    november: '11월',
    december: '12월',
	validators: {
		passwordErrorMsg: '영문자, 숫자 혼합으로 8자 이상 입력하세요.',
		ipErrorMsg: 'ip 형식이 올바르지 않습니다.'
	},
	grid: {
		recordtext: '{0} - {1} / {2}',
		emptyrecords: '데이터가 존재하지 않습니다.',
		loadtext: '로딩중...',
		pgtext : '페이지 {0} of {1}'
	},
	wizard: {
		current: "현재 단계:",
		pagination: "페이지 번호"
	}
});
})(jQuery);
