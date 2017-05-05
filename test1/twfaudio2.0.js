var audioEleObj
var sjFunc;  //听力进度条事件
var jdtFunc;  //听力进度
function controlAudio(){
	if(audioEleObj.paused)
	{
		//当前状态为暂停，切换为播放
		$("#bofangBtn").attr("src", "../../images/audio/zanting.png");
		sjFunc = window.setInterval(function(){
			setAudioDescCurrentTime();
		}, 1000);
		jdtFunc = window.setInterval(function(){
			setAudioDescBg();
		}, 250);
		audioEleObj.play();
	}
	else
	{
		//当前状态为播放，切换为暂停
		$("#bofangBtn").attr("src", "../../images/audio/bofang.png");
		window.clearInterval(sjFunc);
		window.clearInterval(jdtFunc);
		audioEleObj.pause();
	}
}
function initAudio(soundSrc, _audioEleObj){
	audioEleObj = _audioEleObj;
	$(audioEleObj).attr("src", soundSrc);
	audioEleObj.pause();
	audioEleObj.oncanplay = setAudioDescDuration;
}

var tlcd;
//设置总时间和初始化当前时间
function setAudioDescDuration(){
	tlcd = audioEleObj.duration; //听力文件长度
	$("#audioNowTime").html("00:00");
	$("#audioEndTime").html(operateMillSecToiSec(tlcd));
}

//设置当前时间并填充当前时间进度条颜色
function setAudioDescCurrentTime(){
	var dqsc = audioEleObj.currentTime;//当前播放的时长 
	$("#audioNowTime").html(operateMillSecToiSec(dqsc));
	$("#xtimeBg1").css("width", dqsc/tlcd*100 + "%");
}

//填充当前时间进度条颜色
function setAudioDescBg(){
	var dqsc = audioEleObj.currentTime;//当前播放的时长 
	$("#xtimeBg1").css("width", dqsc/tlcd*100 + "%");
}

//毫秒和秒的转换
function operateMillSecToiSec(MillSec){
	var a = MillSec.toString().split(".")[0];
	var secL = parseInt(a/60);
	var secR = a%60;
	secL = secL < 10 ? "0" + secL : secL;
	secR = secR < 10 ? "0" + secR : secR;

	return secL + ":" + secR;
}